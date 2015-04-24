Download ArcheOS
================

You can download the current version of ArcheOS from this page. Note that is only an beta version, **NOT RECOMMENDED FOR PRODUCTION USE!**.
Be sure, before trying, to:

* Choose the nearest and fastest mirror (if one)
* Check the md5sum of the iso to avoid corruptions of the file
* BACK UP all your data on the computer you will use to try ArcheOS

.. _download-latest-version:

Latest version
--------------

ArcheOS 5 "Theodoric" ALPHA
^^^^^^^^^^^^^^^^^^^^^^^^^^^

+------------------------------------+------+----------------------------------+
|          ISO                       | Arch |             MD5SUM               |
+====================================+======+==================================+
| `archeos-5-alpha1-xfce_amd64.iso`_ | 64   | 0c5bb0c8a3f9b343919c80abe16ecf6c |
+------------------------------------+------+----------------------------------+
| `archeos-5-alpha1-xfce_i386.iso`_  | 32   | 25aa000fc8aae6d4a2cda7071eb02287 |
+------------------------------------+------+----------------------------------+

Installation instructions
-------------------------

Once downloaded the iso file above, is possible to burn it to a DVD using softwares such Nero Burning Rom for Microsoft Windows (or better a free one), Brasero for Linux or with the Disk Utiliy on Mac OS X. Remember to burn it at low speed to avoid possible errors.

Once you have your DVD insert it into your computer and restart it. If your pc is configured to start looking from the DVD drive for operating system, a screen should appear with options to choose from “live” or “install”.

Before to install we suggest you to try ArcheOS selecting “live”. This will start ArcheOS from DVD without modifying the computer: no data will be written on your disk but the drawback is that the system is less responsive and you cannot save your data.

Once you're comfortable with ArcheOS you can decide to install it on your hard drive. Restart again the computer and select “install” on the first menu. Then you can select your language and go on with the installation.

Install on existing Debian Wheezy
---------------------------------

If you have a plain Debian Wheezy and you want to "transform" it into ArcheOS 5 Theodoric you can:

* Add the following repositories to the **/etc/apt/sources.list** file:

::

    deb http://repos.archeos.eu/ theodoric main contrib non-free
    deb-src http://repos.archeos.eu/ theodoric main contrib non-free

* Download the public key: ``wget -O - http://farpoint.archeos.eu/archeos_pub.key | sudo apt-key add =``
* Update the packages: ``sudo apt-get update``
* Download and install ``archeos-desktop`` metapackage to install all ArcheOS software: ``sudo apt-get install archeos-desktop`` (it could take some time)

Build it yourself
-----------------

If you want to try to build ArcheOS yourself you can try follow `these instructions`_ 


Older versions
--------------

ArcheOS 4 "Caesar"
^^^^^^^^^^^^^^^^^^

Select your nearest mirror:

+--------------------------+------------------------------------+------+----------------------------------+
|        Location          |          ISO                       | Arch |             MD5SUM               |
+==========================+====================================+======+==================================+
| MuseiDiRonzone (IT)      | `archeos-4-beta-i386.iso (IT)`_    | 32   | f7dd770310cd8968c3b68179825e60de |
+--------------------------+------------------------------------+------+----------------------------------+
| LayerJet Solutions (DE)  | `archeos-4-beta-i386.iso (DE)`_    | 32   | f7dd770310cd8968c3b68179825e60de |
+--------------------------+------------------------------------+------+----------------------------------+


.. _archeos-5-alpha1-xfce_amd64.iso: http://farpoint.archeos.eu/archeos-5-alpha1-xfce_amd64.iso
.. _archeos-5-alpha1-xfce_i386.iso: http://farpoint.archeos.eu/archeos-5-alpha1-xfce_i386.iso
.. _archeos-4-beta-i386.iso (IT): http://www.museidironzone.it/archeos/archeos-4-beta-i386.iso
.. _archeos-4-beta-i386.iso (DE): http://mirror3.layerjet.com/archeos/archeos-4-beta-i386.iso
.. _here: http://farpoint.archeos.eu/archeos_pub.gpg
.. _these instructions: http://doc.archeos.eu/development/pages/build-iso.html
