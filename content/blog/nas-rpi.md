---
title: NAS with Raspberry Pi
date: 2020-11-02
description: Raspberry Pi is a handy tool
taxonomies:
  tags:
    - nas
    - raspberry-pi
    - tutorial
extra:
  local_image: /images/blog/nas/cover.jpg
---

## Introduction

A few months ago, my laptop was out of space and the number of digital devices
was increasing - a smart TV, a chromecast, etc. So I thought why not have a
common storage for all of them.
I started googling about it and one thing blew me away - NAS.

## What is NAS?

All the NASes were too expensive for me - dedicated storage at 10000.
No way.
So, I bought a R.Pi and thought to make it a NAS.
I can reprogram it if I don't require the NAS like when I am off to college.

So, I started looking up tutorials on the net.
There were a lot of them on the net and all of them looked promising but I
wanted the minimal setup so I went to use the Samba.

I would provide all the links below, so that you can explore on your own.
I ordered my R PI and there it was in 4 days of record time.

There was one problem with the tutorials on the net.
They only told me that I needed to format my HDD, or any other storage device I
have to use for NAS.
This was unacceptable as I had nowhere to put my things.
Also, as I may decommission the NAS anytime soon, it was important that my data
could be read on Windows too.
(File system would be changed on formatting) So, I dived deep once again.
This time into working of the Samba.
Turns out I only needed to provide an directory address to where I want the
things to be stored.
This would work great if I could just mount my NTFS drive on the R PI, and make
it the area where Samba would do its NAS magic.
Okay, so let's do it then.

## How to do it

Power up your Raspberry Pi and plug in your storage device into one of the USB
ports.

Now, first of all join your Raspberry Pi onto the same network your laptop is
on.
We don't need a screen for the PI as we would be handling all the communication
via the SSH.

Before proceeding forward, make sure you have your RPI updated via these 2
commands.

```bash
sudo apt update
sudo apt upgrade
```

### Checking disk partitions in RPI

Once you are connected to the RPI remotely, type in the following command.

```bash
sudo fdisk -l
```

This will list out all the disks on the RPI.
Look for a /dev/sda1 on the end of the printout.
This is your storage device.

<figure class="image-1-container">
  <img class="image-1 long-image" src="/images/blog/nas/storage.png" alt=""/>
  <figcaption class="image-1-caption">
    Storage distribution on Raspberry Pi
  </figcaption>
</figure>

Now, according to the tutorials we would format it and change it such that the R
Pi can read it.
But we are not here to do that.
I will be proceeding with a NTFS specific way, but one can also do the same way
for the other systems,

We would install a ntfs reader (ntfs-3g) onto the R PI.
This will make the RPI read the NTFS pen drive I am using.

```bash
sudo apt install ntfs-3g
```

After it is installed, one can mount any NTFS drive onto the R PI, so that one
can read and write data to it.
To mount it use the following command.

```bash
sudo mount /dev/sda1 /mnt/NAS_Disk
```

Here, the first argument is from the fdisk command that we ran.
I had /dev/sda1 as the device and I wanted to show the device at `mnt/<disk
name>`.
Here, replace disk name with any other name.
like I have used NAS_Disk.

We need to mount the drive every time we boot up the Pi - you won't be running
it 24/7 now, would you?
But, we can automate this process.
As it doesn't affect on the tutorial, we are proceeding with the NAS.

### Installing Samba

Now, let's install and setup samba - not the dance, the server handler.

<Info on SAMBA>

Install it via these commands.

```bash
sudo apt install samba samba-common
```

The installer will ask you if you want to modify smb.conf to use WINS settings
from DHCP.
Choose Yes and press Enter.

And boom, you have samba installed.
I love using the apt command for installing.
It's just so simple.

Now, I hope you know how to use nano, if not check that out here.
<Nano tut link>.
I am using vim as I am quite comfortable with it.
Replace vim by nano if you want to use nano instead of vim.
Both are text editors and can be used to edit and write the files.

Now, we will edit the samba config file to share our drive.

```bash
sudo vim /etc/samba/smb.conf
```

Add the following lines at the end of the file.

```toml
[NAS Drive]
path = /mnt/NAS_Disk
writeable = yes
create mask = 0777
directory mask = 0777
public = yes
```

<figure class="image-1-container">
  <img class="image-1 long-image" src="/images/blog/nas/samba-config.png" alt=""/>
  <figcaption class="image-1-caption">
    Samba configuration file
  </figcaption>
</figure>

What this will do is create a folder on the network named NAS Drive (feel free
to change).
This folder would be accessible by all of the people on the local network.
That looks a little bit insecure, doesn't it.
So let's add a password.

```bash
sudo smbpasswd -a pi
```

This command then asks for a password (and then a confirmation) and sets it for
the user = pi.
This doesn't have to be the same one you have for accessing the sudo privileges,
but it can be.

One can create users and give them their own samba passwords so, that one can
control which user control what - look that up in the samba documentation or
google.

Finally, let's restart the samba server to finalize changes.

```bash
sudo systemctl restart smbd
```

Great!

Your own NAS is up and running now.

## Accessing the NAS

One can access the NAS, depending on the OS he/she is on.

1. Windows = type the following line in the address bar of the Windows Explorer.
   The NAS Drive (or whatever you named it) would be visible there.
2. Android = Search for an app named Xplore by Lonely Cat Games.
   Use the LAN option to access the NAS.
   FMI:
   https://www.techrepublic.com/article/how-to-connect-to-an-smb-share-from-your-android-device/

<!-- 2. Linux/Mac = It would ask for -->

I have just made a basic NAS and none of the optimisations till now.
Now, once you confirm that the NAS is running, its time to add a few changes I
promised in the above tutorial.

## Automatic Mounting of drive

This is fairly simple - one can simply mount the drive on boot.
To do this we need to edit the fstab file.
Let's open it up in nano:

```bash
sudo nano /etc/fstab
```

Add the following line at the end of the file and before the comments:

```bash
UUID=8E3AA8FC3AA8E287 /mnt/NAS_Disk ntfs-3g defaults,auto,users,rw,nofail,umask=000 0 0
```

This makes my file like,

<figure class="image-1-container">
  <img class="image-1 long-image" src="/images/blog/nas/mount-file.png" alt=""/>
  <figcaption class="image-1-caption">
    Fstab file
  </figcaption>
</figure>

The pseudocode for that would look like,

```bash
UUID= <UUID for drive name defaults,auto,users,rw,nofail,umask=000 0 0 >/mnt/ <storage >ntfs-3g
```

Here, storage name is the one you used when you were mounting the drive.
Now, as for the UUID, open up another ssh shell, and type:

```bash
sudo blkid
```

There will be a lot of devices there.

<figure class="image-1-container">
  <img class="image-1 long-image" src="/images/blog/nas/devices.png" alt=""/>
  <figcaption class="image-1-caption">
    Devices file
  </figcaption>
</figure>

Copy the UUID from the one which has the same partition name as your storage
device.
Save and close the fstab file.

Now, you can shut down your R PI when you don't need it and just boot it back up
when you do.

## Conclusion

In this tutorial we have set up our own home made NAS.

## Warnings:

- Don't connect more than one storage device onto the R Pi as it can't provide
  the power to it.
  This may result in a storage device failure.
- Always unmount before disconnecting the storage device from the R PI

## References

1. NAS:
   - https://in.pcmag.com/news/134535/how-to-turn-a-raspberry-pi-into-a-nas-for-whole-home-file-sharing

2. NTFS:
   - https://pimylifeup.com/raspberry-pi-ntfs/
   - https://www.raspberrypi.org/documentation/configuration/external-storage.md
