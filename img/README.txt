PORTFOLIO — IMAGE & SETUP NOTES
================================

This file holds the "how to" notes that used to appear on the website itself.
None of this shows on the public site.


1) SCREENSHOTS — HOW THEY WORK
------------------------------
The Screenshots section is organized BY PROJECT. Larger case studies can hold
more images when the visual examples are useful. A tile shows a placeholder until a file with the matching name exists
in this img/ folder — then it swaps to your image automatically (no code change).
Click any real image on the site to enlarge it (lightbox).

Filenames the tiles currently look for:

  Gage Calibration Register   (already added, real screens)
    gage-1.png   Dashboard & status
    gage-2.png   All gages
    gage-3.png   Calibration history
    gage-4.png   Past-due gages
    gage-5.png   New calibration entry

  Mold Maintenance, Release & Part Pull Tracker   (already added, real screens)
    mold-maintenance-overview.png
    mold-maintenance-counters-rework.png
    mold-release-alert-part-pull.png
    mold-release-applied-reset.png
    mold-release-empty-search.png
    mold-new-upload.png


  Equipment Tracker & Preventive Maintenance System   (already added, real screens)
    equipment-tracker-dashboard.png
    equipment-tracker-equipment-list.png
    equipment-tracker-criteria-tasks.png
    equipment-tracker-new-criteria.png
    equipment-tracker-maintenance-schedule.png
    equipment-tracker-maintenance-records.png
    equipment-tracker-escalations.png
    equipment-tracker-reports.png
    equipment-tracker-new-equipment.png

  OpsPilot Code App — Manufacturing Operations   (already added, real screens)
    opspilot-command-center-kpis.png
    opspilot-command-center-pagination.png
    opspilot-my-schedule-selection.png
    opspilot-stop-outcome-modal.png
    opspilot-in-progress.png
    opspilot-history.png
    opspilot-drop-off-parts.png
    opspilot-assign-to.png
    opspilot-assign-tasks.png
    opspilot-workload.png
    opspilot-parts-estimates.png
    opspilot-scheduling-agent.png

  ProjectHub Code App — Project Management   (already added, real screens)
    projecthub-projects-overview.png
    projecthub-projects-filtered-low.png
    projecthub-new-project-modal.png
    projecthub-my-tasks-board.png
    projecthub-edit-task-modal.png
    projecthub-project-overview-tab.png
    projecthub-project-milestones-tab.png
    projecthub-project-links-tab.png
    projecthub-project-timeline-dark.png

  Purchase Request Approval   (placeholders — add yours)
    purchase-1.png, purchase-2.png, purchase-3.png

  Purchase Order Request & Approval Inbox   (already added, real screens)
    por-my-requests.png
    por-new-request-info.png
    por-line-items.png
    por-attachments.png
    por-review-submit.png
    por-approval-inbox-single.png
    por-approval-inbox-multiple.png
    por-approval-inbox-expanded.png
    por-approval-decision-casting.png
    por-approval-decision-cabinet.png

  Employee Leave Tracker Canvas App   (already added, real screens)
    employee-leave-dashboard.png
    employee-leave-team-calendar.png
    employee-leave-approvals.png
    employee-leave-new-request.png
    employee-leave-my-requests.png

  Copilot Cowork Project Portfolio Widgets   (already added, real widget screens)
    cowork-portfolio-explorer-summary.png
    cowork-portfolio-explorer-expanded.png
    cowork-priority-carousel-critical.png
    cowork-priority-carousel-watch.png
    cowork-dashboard-overview-tab.png
    cowork-dashboard-projects-tab.png
    cowork-dashboard-team-tab.png
    cowork-dashboard-analytics-tab.png
    cowork-milestone-met.png
    cowork-milestone-open.png
    cowork-milestone-missed.png
    cowork-personas-count-desc.png
    cowork-personas-avg-completion.png
    cowork-personas-avg-completion-asc.png
    cowork-personas-name-sort.png
    cowork-portfolio-post.png
    cowork-portfolio-post-bottom.png
    cowork-budget-tracker-top.png
    cowork-budget-tracker-chart.png
    cowork-portfolio-grid.png
    cowork-leaderboard.png
    cowork-roadmap-2026.png
    cowork-roadmap-detail-modal.png
    cowork-report-card-status.png
    cowork-report-card-timeline.png
    cowork-team-persona-cards.png

PNG or JPG both work. Landscape (about 16:10) looks best. Keep each file small
(ideally under ~300 KB) so the site stays fast.


2) ADDING MORE IMAGES PER PROJECT
-------------------------------------
To add more images to a project, open index.html, find that project's
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
