---
layout: single
title: RSE 2016 | Workshop instructions
---

<style>
#menu ul {
    float: left;
    width: 100%;
    padding: 0;
    margin : 2;
    list-style-type: none;
}

#menu a {
    float: left;
    width: 6em;
    text-align: center;
    text-decoration: none;
    color: white;
    background-color: black;
    padding: 0.2em 0.6em;
}

#menu a:hover {background-color: #ff3300;}

#menu li {display: inline;}

table{
    border-collapse: collapse;
    border-spacing: 0;
    border:2px solid #000000;
    width: 100%;
}

th{
    border:2px solid #000000;
}

tr{
    border:1px solid #000000;
}

td{
    border:1px solid #000000;
}
</style>

<img src="images/UKRSE_conference16.jpg" 
     alt="15-16 September First Conference of Research Software Engineers" 
     style="width: 100%;"/>

<div id="menu" width="100%">
<ul>
  <li><a href="conf2016">Home</a></li>
  <li><a href="conf2016_programme">Programme</a></li>
  <li><a href="conf2016_venue">Venue</a></li>
  <li><a href="conf2016_accommodation">Hotels</a></li>
  <li><a href="conf2016_diversity">Diversity</a></li>
  <li><a href="conf2016_registration">Registration</a></li>
  <li><a href="conf2016_promotion">Promotion</a></li>
  <li><a href="conf2016_sponsors">Sponsorship</a></li>
  <li><a href="conf2016_contact">Contacts</a></li>
</ul>
</div>

## Instructions for preparing workshops

Thank you for contributing to the RSE conference via the preparation of a workshop. Please find here information on how to prepare workshop material.

The deadline for delivery is **Friday 2nd September**. This will give us enough time to produce the USB sticks over the following week. Ideally, it would help if you could get things to us a little sooner. Please email material to [Christopher Woods](mailto:Christopher.Woods@bristol.ac.uk), who will coordinate submissions. Chris is very happy to keep in touch throughout August, and to try to install partial workshops in the central VM (i.e. if you need software package X, then let Chris know early so that he can install it early in the VM and would thus have time to deal with any incompatibilities with other's workshops).

## Virtual Machines

To help with the preparation of the practical workshops, we have decided that we will use hpclinux to provide the base virtual machine. This provides a linux installation that has the intel and gcc compilers installed, python, MPI etc. Note that if you need a different operating system for your workshop (e.g. windows), then please email me and I will prepare a suitable virtual machine for you and you can ignore these instructions. 

You can download HPCLinux from [this page](http://www.paratools.com/HPCLinux/#Download).

You should download the "New Light OVA file", which is about 4 GB in size.

You should run the virtual machine using VirtualBox, which you can obtain from [here](https://www.virtualbox.org).

This OVA file can be imported into VirtualBox by clicking "File | Import Appliance". This will import the virtual machine into VirtualBox, taking about 16 GB of disk space.

Once you've booted this virtual machine, you can login using the username "livetau" and the password that I emailed to you (this cannot be shared on a website. [Email us](mailto:Christopher.Woods@bristol.ac.uk) if you need this sent again).

This will boot you into a graphical linux desktop, with icons to start the terminal and firefox at the top of the screen.

We would like to ensure a consistent directory structure for all of the workshops. To achieve this, here is a script that will create all of the directories. Please copy and paste it into a text file called "make_workshop_directories.py" in your virtual machine;

```Python
import os
import sys

print("Making workshop directories in %s" % os.getenv("HOME"))
os.chdir( os.getenv("HOME") )

workshops = ["a1", "a2", "a3", "a4", "a5",
             "b1", "b2", "b3", "b4", "b5",
             "c1", "c2", "c3", "c4", "c5" ]

def mkdir(dir):
    try:
         print("Creating directory '%s'" % dir)
         os.mkdir(dir)
    except:
         print("Failed to create directory '%s'. Exiting..." % dir)
         sys.exit(0)

mkdir("workshops")

for workshop in workshops:
    mkdir("workshops/%s" % workshop)
```

Run the script using the command

```
python make_workshop_directories.py
```

Each workshop has been given a letter/number, from A1 to C5. These are listed on [this page](http://www.rse.ac.uk/conf2016_workshops).

Please could use this page to find the ID for your workshop, and then develop your workshop with the directory that has been created, e.g. workshop A1 should be developed in 

```
/home/livetau/workshops/a1
```

This will help us when we are integrating all of the virtual machines together.

When you have developed your workshop, please tar up your workshop directory and [email it to us](mailto:Christopher.Woods@bristol.ac.uk), together with instructions to install any other extra software that you need. We will then make sure to install and test everything in the central VM that we will use for the conference itself.

If you have any problems or any questions then please feel free to [get in touch](mailto:Christopher.Woods@bristol.ac.uk). We are very happy to provide help with the preparation of workshops, and are happy to do that via email or Skype.

Thanks again for your contribution,

<br/>
<br/>

