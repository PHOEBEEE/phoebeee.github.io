PORTFOLIO — IMAGE & SETUP NOTES
================================

This file holds the "how to" notes that used to appear on the website itself.
None of this shows on the public site.


1) SCREENSHOTS — HOW THEY WORK
------------------------------
The Screenshots section is organized BY PROJECT. Each project group holds up to
10 images. A tile shows a placeholder until a file with the matching name exists
in this img/ folder — then it swaps to your image automatically (no code change).
Click any real image on the site to enlarge it (lightbox).

Filenames the tiles currently look for:

  Gage Calibration Register   (already added, real screens)
    gage-1.png   Dashboard & status
    gage-2.png   All gages
    gage-3.png   Calibration history
    gage-4.png   Past-due gages
    gage-5.png   New calibration entry

  Mold Tracking & Demold Release   (placeholders — add yours)
    mold-1.png, mold-2.png, mold-3.png

  Purchase Request Approval   (placeholders — add yours)
    purchase-1.png, purchase-2.png, purchase-3.png

PNG or JPG both work. Landscape (about 16:10) looks best. Keep each file small
(ideally under ~300 KB) so the site stays fast.


2) ADDING UP TO 10 IMAGES PER PROJECT
-------------------------------------
To add more images to a project (up to 10), open index.html, find that project's
gallery, copy one <figure class="shot"> ... </figure> block, and change two things:
  - the <img src="img/NAME.png"> filename (e.g. gage-6.png, gage-7.png ...)
  - the <figcaption> text
Then save the matching image into this img/ folder.

To add a brand-NEW project group, copy a whole <div class="proj-gallery"> block,
rename its heading, and give its tiles new filenames.


3) CONTACT FORM (Formspree)
---------------------------
The contact form is wired to your Formspree endpoint:
  https://formspree.io/f/meeborlw
GitHub Pages can't process forms on its own, which is why Formspree handles it.
Your email link works on its own regardless. To change the endpoint later, edit
the form's action="..." in index.html.


4) PRIVACY REMINDER
-------------------
Before uploading any shop-floor screenshot, blur or crop out real names, serial
numbers, customer names, and pricing — the site is public once it's on GitHub Pages.
