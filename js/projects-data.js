window.PROJECT_DETAILS = {
"1": {
"name": "QC Inspection Scheduling and Time Tracking App",
"area": "Manufacturing Quality & Operations",
"business": "Replace manual QC assignment, inspection status tracking, and elapsed-time spreadsheets with one operational application for daily inspection work.",
"architecture": "Dataverse task table connected to a model-driven app, custom page/pane user experiences, custom actions for Start/Stop, and Power BI reporting on planned versus actual work.",
"methodology": "Process mapping, data model design, role-based security, iterative prototype, UAT with QC users, and reporting validation.",
"process": "Inspector confirms part drop-off, starts work, stops work with outcome, captures pending engineering or NCR data, and managers review weekly capacity and SLA trends.",
"technologies": "Dataverse; Model-driven Power Apps; Power Automate; JavaScript; Custom Pages; Side Panes; C# Plugins; Custom Actions; Ribbon Workbench; Power BI"
},
"2": {
"name": "QC Start/Stop Custom Action Automation",
"area": "Manufacturing Quality & Operations",
"business": "Ensure inspectors can start and stop inspection sessions consistently without manually editing multiple Dataverse records.",
"architecture": "Command bar buttons call Dataverse custom actions; C# plugin creates or closes time-tracking records and updates active-session flags.",
"methodology": "Event-driven design, server-side validation, plugin registration, action testing, and UI enable-rule testing.",
"process": "Start action creates a tracking session and marks the task active; stop action calculates elapsed time and applies the selected final status.",
"technologies": "Dataverse Custom Actions; C# Plugin; Plugin Registration Tool; JavaScript; Ribbon Workbench; Model-driven App"
},
"3": {
"name": "QC Drop-Off Confirmation Custom Page",
"area": "Manufacturing Quality & Operations",
"business": "Prevent QC work from starting before parts are physically confirmed as received.",
"architecture": "A custom page opens from the grid and writes confirmation fields back to Dataverse before the Start action continues.",
"methodology": "User-flow design, form validation, parameter passing, and controlled navigation between grid and custom page.",
"process": "User selects inspection task, confirms part-in status, captures confirmation date/user, and returns to the grid with refreshed data.",
"technologies": "Power Apps Custom Page; Dataverse; JavaScript; Model-driven App; Power Fx"
},
"4": {
"name": "QC Stop Task Side Pane",
"area": "Manufacturing Quality & Operations",
"business": "Give inspectors a fast guided experience to close one or multiple inspection tasks with required outcome details.",
"architecture": "HTML/JavaScript side pane receives selected task IDs, collects outcome-specific data, then executes the Dataverse Stop action.",
"methodology": "Responsive UI design, command parameter testing, required-field rules, and transactional server-side processing.",
"process": "Inspector chooses Pass, Fail, Pending Engineering, or Ongoing; system validates additional fields such as NCR, pending user, and estimated completion.",
"technologies": "Model-driven App Side Pane; HTML; JavaScript; Dataverse Web API; Custom Actions; C# Plugin"
},
"5": {
"name": "QC Weekly Capacity and SLA Dashboard",
"area": "Manufacturing Quality & Operations",
"business": "Help QC managers compare assigned work, actual hours, cycle time, lead time, and SLA performance by week.",
"architecture": "Power BI model connects to Dataverse tasks and time sessions with planned and actual date relationships.",
"methodology": "Metric definition, DAX modeling, date table design, validation against operational records, and manager review.",
"process": "Tasks are assigned with estimated hours; time sessions create actuals; dashboard calculates planned versus actual workload and bottlenecks.",
"technologies": "Power BI; Dataverse; DAX; USERELATIONSHIP; Date Tables; Model-driven App Data"
},
"6": {
"name": "QC Manager-Only Security Views",
"area": "Manufacturing Quality & Operations",
"business": "Restrict sensitive management views so normal users cannot see manager-only inspection data.",
"architecture": "Dataverse security roles, view visibility, app navigation, and role-based access patterns aligned to QC roles.",
"methodology": "Security requirement analysis, role matrix design, least-privilege testing, and user impersonation validation.",
"process": "Managers receive elevated access to reporting and administrative views; inspectors see only operational views required for daily work.",
"technologies": "Dataverse Security Roles; Model-driven App; Views; Teams; Role-based Access Control"
},
"7": {
"name": "Serial Number Validation and ERP Lookup Flow",
"area": "Manufacturing Quality & Operations",
"business": "Reduce manual data entry errors by validating serial numbers and automatically populating part metadata.",
"architecture": "Power Apps form JavaScript calls Power Automate/connector logic to retrieve part, revision, description, and customer details.",
"methodology": "Input validation, duplicate/mismatch handling, API response mapping, and user alert design.",
"process": "User enters serial numbers line by line; system checks the source data and warns when part numbers or revisions do not match.",
"technologies": "Model-driven Power Apps; JavaScript; Power Automate; Dataverse; REST/API Lookup"
},
"8": {
"name": "NCR Management and Failure Tracking",
"area": "Manufacturing Quality & Operations",
"business": "Capture failed inspections and link NCR numbers to quality tasks for follow-up and reporting.",
"architecture": "QC stop process collects failure information and writes structured NCR fields into Dataverse for reporting.",
"methodology": "Quality process mapping, failure-status design, mandatory-field logic, and downstream reporting.",
"process": "Inspector marks task as Fail, enters NCR reference, and the system stores the failure for quality review and trend analysis.",
"technologies": "Dataverse; Model-driven Power Apps; Custom Actions; C# Plugin; Power BI"
},
"9": {
"name": "Pending Engineering Workflow for QC",
"area": "Manufacturing Quality & Operations",
"business": "Create visibility when inspections are blocked by engineering review instead of leaving work in unclear status.",
"architecture": "Stop action captures pending engineer, start date, estimated completion, and status values in Dataverse.",
"methodology": "Exception-process design, field requirement rules, escalation-data capture, and status lifecycle modeling.",
"process": "Inspector selects Pending Engineering, assigns the responsible engineer, enters expected completion, and managers track blocked work.",
"technologies": "Dataverse; Model-driven App; Side Pane; JavaScript; C# Plugin; Power BI"
},
"10": {
"name": "QC Assignment and Priority Board",
"area": "Manufacturing Quality & Operations",
"business": "Help supervisors assign inspection work, manage priorities, and keep daily QC activity organized.",
"architecture": "Dataverse task records surface through model-driven views grouped by assignment, priority, and status.",
"methodology": "View design, queue-style process modeling, user-role feedback, and operational dashboarding.",
"process": "Supervisor reviews incoming work, assigns inspectors, sets priority, and monitors status changes through the task lifecycle.",
"technologies": "Dataverse; Model-driven Power Apps; Views; Business Rules; Power BI"
},
"11": {
"name": "Work Order and Lot Validation Rules",
"area": "Manufacturing Quality & Operations",
"business": "Standardize manufacturing identifiers such as work order, lot, batch, and quantity to reduce downstream quality issues.",
"architecture": "Client-side JavaScript and Dataverse validation rules enforce formats and required fields based on inspection type.",
"methodology": "Data-quality rule gathering, regex validation, form event testing, and error-message refinement.",
"process": "Users enter work order and lot information; system validates patterns such as 6-digits-3-digits and prevents bad records.",
"technologies": "Model-driven Power Apps; JavaScript; Dataverse; Business Rules; Regex Validation"
},
"12": {
"name": "Gage Calibration Management System",
"area": "Manufacturing Quality & Operations",
"business": "Track calibration schedules and compliance for inspection equipment so expired gages do not impact quality.",
"architecture": "Dataverse or SharePoint-backed app with calibration assets, due dates, owners, reminders, and compliance dashboards.",
"methodology": "Asset inventory modeling, lifecycle-status design, notification design, and compliance reporting.",
"process": "Gage records are created with due dates; reminders trigger before expiration; overdue items appear in management views.",
"technologies": "Power Apps; Dataverse; Power Automate; Power BI; SharePoint"
},
"13": {
"name": "Kit and Rolls Outlife Tracking",
"area": "Manufacturing Quality & Operations",
"business": "Monitor material outlife and readiness so expired or at-risk materials are not used in production.",
"architecture": "Power Apps captures material kit/roll data, Dataverse stores expiration and usage status, and Power Automate sends alerts.",
"methodology": "Material lifecycle mapping, expiration calculation, exception workflow design, and production-readiness reporting.",
"process": "Users log material issue time, system calculates remaining outlife, and supervisors see warnings before material expires.",
"technologies": "Power Apps; Dataverse; Power Automate; Power BI"
},
"14": {
"name": "Mold Maintenance, Release and Part Pull Tracker",
"area": "Manufacturing Quality & Operations",
"business": "Control mold release, rework, and part-pull tracking so technicians know when a mold is OK, when a release is required, and how many parts have been pulled since the last release or rework.",
"architecture": "Power Apps canvas app over mold records with search/filter screens, edit forms, attachment capture, read-only tracking counters, and a release/part-pull action screen that updates counters and status fields.",
"methodology": "Mapped the shop-floor mold lifecycle, separated upload, maintenance, and release/part-pull actions into dedicated screens, and designed warning states around release thresholds and rework history.",
"process": "User uploads a new mold, maintenance users edit the record and rework details, technicians scan or enter an MLD number, review counters, record part pulls, apply releases when required, and the app resets the release counter after release.",
"technologies": "Power Apps Canvas; SharePoint/Dataverse; Power Fx; Attachments; Search and filters; Release counters; Rework tracking"
},
"15": {
"name": "Digital Manufacturing Checklist Automation",
"area": "Manufacturing Quality & Operations",
"business": "Replace paper-based checklists with consistent digital submissions, approvals, and searchable history.",
"architecture": "Canvas app or model-driven app captures checklist entries; Power Automate routes exceptions and stores evidence.",
"methodology": "Paper-process conversion, checklist schema design, mobile-friendly UX, and exception-based approvals.",
"process": "Operator completes checklist, system validates required answers, exceptions trigger notifications, and completed checks become searchable records.",
"technologies": "Canvas Apps; Dataverse; SharePoint Lists; Power Automate; Power BI"
},
"16": {
"name": "SQDP Daily Board",
"area": "Manufacturing Quality & Operations",
"business": "Digitize Safety, Quality, Delivery, and People daily status reporting with visual color indicators.",
"architecture": "SharePoint lists store daily records and issues; Power BI displays monthly matrix views and color-coded status trends.",
"methodology": "KPI definition, status taxonomy design, list schema build, and visual dashboard iteration.",
"process": "Teams enter daily SQDP status; issues are captured when status is not green; dashboard summarizes patterns by day and month.",
"technologies": "SharePoint Lists; Power Apps; Power Automate; Power BI"
},
"17": {
"name": "Safety Incident and Near-Miss Reporting",
"area": "Manufacturing Quality & Operations",
"business": "Capture safety events, near misses, unsafe acts, and unsafe conditions in a consistent process.",
"architecture": "SQDP-related list/app captures safety categories with color logic and escalation workflow.",
"methodology": "Safety taxonomy design, form simplification, notification rules, and management review.",
"process": "User records incident type and details; system categorizes status and surfaces events for follow-up.",
"technologies": "SharePoint Lists; Power Apps; Power Automate; Power BI"
},
"18": {
"name": "Quality NCR Delay Dashboard",
"area": "Manufacturing Quality & Operations",
"business": "Show whether quality issues are causing manufacturing delays and where recovery is needed.",
"architecture": "Quality records feed a Power BI matrix using NCR status and delay impact flags.",
"methodology": "Metric mapping, status-color rules, data model design, and stakeholder validation.",
"process": "Quality team records NCR impact; dashboard separates no-delay NCRs from delay-causing NCRs.",
"technologies": "Power BI; SharePoint; Dataverse; DAX"
},
"19": {
"name": "Delivery Recovery Tracking Board",
"area": "Manufacturing Quality & Operations",
"business": "Track whether delivery targets are achieved, have recovery plans, or have no recovery path.",
"architecture": "SharePoint/Power Apps data-entry layer with Power BI color matrix for delivery status.",
"methodology": "Operational KPI design, exception process mapping, and dashboard refinement.",
"process": "Daily delivery status is recorded as achieved, recovery planned, or no recovery; leadership reviews monthly patterns.",
"technologies": "SharePoint Lists; Power Apps; Power BI; Power Automate"
},
"20": {
"name": "People Absence Impact Tracker",
"area": "Manufacturing Quality & Operations",
"business": "Make unplanned absence impacts visible so teams can distinguish no-impact absences from production-impacting absences.",
"architecture": "SQDP People list stores daily workforce status and Power BI summarizes impact trends.",
"methodology": "Status-rule design, daily-entry workflow, and management reporting.",
"process": "Supervisor records people status; system classifies the day as on plan, absence no impact, or absence with impact.",
"technologies": "SharePoint Lists; Power Apps; Power BI"
},
"21": {
"name": "IoT OEE Runtime Monitoring System",
"area": "Manufacturing Quality & Operations",
"business": "Capture machine runtime hours automatically for OEE and production analysis instead of relying on manual logs.",
"architecture": "Wireless runtime sensor data flows through a gateway/API layer into Dataverse and Power BI dashboards.",
"methodology": "Device-to-cloud architecture planning, data schema design, gateway capacity evaluation, and reporting model design.",
"process": "Runtime sensor captures machine activity; gateway transmits data; Dataverse stores readings; Power BI calculates runtime and availability metrics.",
"technologies": "IoT Sensors; DigiMesh Gateway; Dataverse; Power Automate; APIs; Power BI"
},
"22": {
"name": "Equipment Runtime Gateway Capacity Design",
"area": "Manufacturing Quality & Operations",
"business": "Plan how to scale machine runtime monitoring across hundreds of equipment assets.",
"architecture": "Gateway topology, device grouping, API ingestion, Dataverse storage, and reporting architecture for large equipment fleets.",
"methodology": "Capacity planning, device inventory mapping, sampling-frequency decisions, and data-retention planning.",
"process": "Equipment sensors are mapped to gateways; readings are normalized; dashboards summarize runtime by machine, shift, and site.",
"technologies": "IoT Gateway; Wireless Sensors; Dataverse; Azure; Power BI; Power Automate"
},
"23": {
"name": "Purchase Request Multi-Level Approval System",
"area": "Dataverse Apps & Automation",
"business": "Automate purchase request approval based on department, approver level, amount threshold, skipped levels, and final approval or rejection.",
"architecture": "Dataverse header and approval-line tables with approval matrix table; Power Automate initializes approvals and C# plugin enforces lifecycle transitions.",
"methodology": "Approval-policy discovery, data normalization, threshold logic design, plugin-based transaction control, and UAT by approval scenarios.",
"process": "Request is submitted, first future approval becomes pending, approvers act by level, same-level records are skipped, and the request closes approved or rejected.",
"technologies": "Dataverse; Power Automate; C# Plugin; Model-driven App; Access Teams; Security Roles"
},
"24": {
"name": "Purchase Approval Matrix Configuration",
"area": "Dataverse Apps & Automation",
"business": "Make approver routing maintainable without hardcoding every department and level in flows.",
"architecture": "Dataverse matrix table stores department, code, level, and threshold configuration used by automation.",
"methodology": "Rule externalization, lookup design, table-driven routing, and test cases for departments missing lower levels.",
"process": "Admin maintains approver matrix; submit flow reads configuration; system skips missing levels and respects dollar thresholds.",
"technologies": "Dataverse; Model-driven App; Power Automate; C# Plugin"
},
"25": {
"name": "Owner-Only Purchase Request Visibility",
"area": "Dataverse Apps & Automation",
"business": "Allow submitters to see their own requests while keeping other purchase records restricted.",
"architecture": "Dataverse security roles and access-team pattern grant record-level visibility after submission.",
"methodology": "Least-privilege security design, record-sharing pattern validation, and test-user verification.",
"process": "When a request is created, access is granted to the submitter or owner; other users are blocked unless they are approvers or admins.",
"technologies": "Dataverse Security; Access Teams; Power Automate; Model-driven Apps"
},
"26": {
"name": "Department Code and Approval Routing Map",
"area": "Dataverse Apps & Automation",
"business": "Standardize department names and codes so approval routing stays consistent across requests.",
"architecture": "Department code mapping table supports approval logic and reporting dimensions.",
"methodology": "Master-data cleanup, mapping definition, validation rules, and governance documentation.",
"process": "Requests store department code; routing engine uses code to find correct approval levels and thresholds.",
"technologies": "Dataverse; Power Automate; Model-driven App; Data Governance"
},
"27": {
"name": "Teams Approval Notifications for Purchase Requests",
"area": "Dataverse Apps & Automation",
"business": "Notify approvers in their normal collaboration channel and reduce delayed purchase approvals.",
"architecture": "Dataverse approval status changes trigger Power Automate notifications and Teams approval messages.",
"methodology": "Notification mapping, adaptive approval step design, exception handling, and audit-trail review.",
"process": "Pending approver receives Teams/email notification; decision updates Dataverse; next approver is notified automatically.",
"technologies": "Power Automate; Microsoft Teams Approvals; Dataverse; Outlook"
},
"28": {
"name": "ProjectHub Project Management System",
"area": "Dataverse Apps & Automation",
"business": "Create a Microsoft-based project management system for projects, tasks, milestones, members, and time tracking.",
"architecture": "Dataverse project model with Power Apps interfaces, SharePoint/Logic Apps automation, and Copilot-oriented knowledge experiences.",
"methodology": "Domain modeling, MVP build, iterative feature expansion, testing with sample data, and portfolio-ready documentation.",
"process": "Users create projects, assign tasks, manage milestones, capture time, and review status through filtered views and dashboards.",
"technologies": "Dataverse; Power Apps; Power Automate; SharePoint; Logic Apps; Power BI; Copilot"
},
"29": {
"name": "ProjectHub 10,000-Item Task Dataset",
"area": "Dataverse Apps & Automation",
"business": "Create a realistic task dataset for testing filters, delegation, performance, and demos.",
"architecture": "Generated task records with varied statuses, owners, dates, priorities, departments, and filter combinations.",
"methodology": "Test-data design, filter scenario coverage, volume validation, and demo preparation.",
"process": "Large dataset is loaded; app and list filters are tested across priority, status, owner, project, and date conditions.",
"technologies": "Excel/XLSX; SharePoint Lists; Dataverse; Power Apps; Test Data"
},
"30": {
"name": "ProjectHub Time Entry Module",
"area": "Dataverse Apps & Automation",
"business": "Track project effort so project managers can compare actual work against planned estimates.",
"architecture": "Time-entry table links users, tasks, and projects with rollups into dashboards.",
"methodology": "Timesheet process design, relational model definition, validation rules, and reporting alignment.",
"process": "Team members enter time against tasks; managers review totals by project, phase, member, and period.",
"technologies": "Dataverse; Power Apps; Power Automate; Power BI"
},
"31": {
"name": "ProjectHub Milestone Tracking",
"area": "Dataverse Apps & Automation",
"business": "Give project teams visibility into milestone dates, delays, and completion status.",
"architecture": "Milestone table connects to projects and tasks with model-driven views and dashboard summaries.",
"methodology": "Project-lifecycle mapping, milestone status design, and reporting validation.",
"process": "PM creates milestones, links tasks, updates dates/status, and dashboard highlights late or upcoming milestones.",
"technologies": "Dataverse; Model-driven Power Apps; Power BI; Power Automate"
},
"32": {
"name": "ProjectHub React Code App Front End",
"area": "Dataverse Apps & Automation",
"business": "Create a modern responsive front end for project management instead of relying only on classic forms.",
"architecture": "React/TypeScript code app connects to Dataverse-oriented APIs and presents project data with modern components.",
"methodology": "Component-driven UI design, API contract testing, iterative UX improvement, and deployment planning.",
"process": "Users navigate project records, tasks, and status data through a lightweight app interface connected to backend services.",
"technologies": "React; TypeScript; Material UI; Power Apps Code Apps; Dataverse Web API"
},
"33": {
"name": "ProjectHub Custom Connector and OpenAPI",
"area": "Dataverse Apps & Automation",
"business": "Expose project data through a reusable API connector for Power Automate, Power Apps, and Copilot patterns.",
"architecture": "OpenAPI definition describes project endpoints; custom connector handles authentication and request/response schemas.",
"methodology": "API-first design, schema documentation, connector testing, and error-response mapping.",
"process": "Makers call project endpoints from flows or apps; connector standardizes access to ProjectHub data.",
"technologies": "Custom Connectors; OpenAPI; Power Automate; Power Apps; REST API; Dataverse"
},
"34": {
"name": "ProjectHub Logic Apps and SharePoint Automation",
"area": "Dataverse Apps & Automation",
"business": "Automate ProjectHub work across SharePoint files/lists and Dataverse-oriented processes.",
"architecture": "Logic Apps coordinate SharePoint events, HTTP/API calls, and project data updates.",
"methodology": "Event-driven workflow design, connector selection, exception handling, and run-history validation.",
"process": "SharePoint or project events trigger automation; Logic App updates related records and notifies users.",
"technologies": "Azure Logic Apps; SharePoint; Dataverse; HTTP; Power Automate"
},
"35": {
"name": "Secure Task Reassignment Architecture",
"area": "Dataverse Apps & Automation",
"business": "Prevent users from bypassing rules when reassigning tasks while still supporting controlled ownership changes.",
"architecture": "Power Apps calls a custom API; server-side C# logic validates permissions and performs reassignment.",
"methodology": "Threat modeling, least-privilege design, server-side validation, and test cases for allowed/blocked actions.",
"process": "User requests reassignment; API verifies role and business conditions; system updates task owner when approved.",
"technologies": "Dataverse Custom API; C# Plugin; Power Apps; Security Roles; JavaScript"
},
"36": {
"name": "Dataverse User Identity Resolution",
"area": "Dataverse Apps & Automation",
"business": "Map signed-in Entra ID users to Dataverse systemuser records reliably for code apps and automation.",
"architecture": "Front end retrieves current identity and resolves it against Dataverse user records before creating assignments.",
"methodology": "Identity-flow analysis, API query design, fallback handling, and security validation.",
"process": "App gets user identity, queries Dataverse systemuser, and uses the resolved user ID for ownership or lookup fields.",
"technologies": "Entra ID; Dataverse Web API; React; TypeScript; Power Apps Code Apps"
},
"37": {
"name": "Lunch with a Lead Scheduling App",
"area": "Dataverse Apps & Automation",
"business": "Create an internal event sign-up process that collects participants and automatically schedules calendar events.",
"architecture": "Canvas app writes sign-up data to SharePoint and calls Power Automate to create calendar events.",
"methodology": "Simple intake design, recurrence-field modeling, flow-trigger testing, and user-friendly UI build.",
"process": "User selects session details; app records the request; flow creates or updates calendar invitation.",
"technologies": "Canvas Power Apps; SharePoint Lists; Power Automate; Outlook Calendar"
},
"38": {
"name": "Trade Request Engineering Document App",
"area": "Dataverse Apps & Automation",
"business": "Collect engineering document trade requests with proper metadata, validation, and document-type-specific fields.",
"architecture": "Model-driven app form JavaScript shows/hides fields, changes labels, and validates SOP/Tech Tip or engineering document rules.",
"methodology": "Form behavior design, metadata rules, validation testing, and user acceptance feedback.",
"process": "User selects document type; form dynamically shows relevant fields; validation enforces correct part/SOP information before save.",
"technologies": "Model-driven Power Apps; Dataverse; JavaScript; Business Rules"
},
"39": {
"name": "Part Numbering App",
"area": "Dataverse Apps & Automation",
"business": "Generate and control part numbering so engineering and manufacturing data stays consistent.",
"architecture": "Power Apps interface with Dataverse sequence/configuration tables and validation automation.",
"methodology": "Numbering rule discovery, sequence design, duplicate prevention, and user testing.",
"process": "User requests a part number; system validates category and generates the next controlled identifier.",
"technologies": "Power Apps; Dataverse; Power Automate; Business Rules"
},
"40": {
"name": "Engineering Change Request System",
"area": "Dataverse Apps & Automation",
"business": "Manage change requests, released part metadata, approvals, and document status in a structured system.",
"architecture": "Dataverse table model with model-driven forms, JavaScript field behavior, and approval automation.",
"methodology": "Change-control process mapping, metadata model design, approval lifecycle design, and UAT.",
"process": "User submits change request, system captures document and revision metadata, approval/release steps move the record through lifecycle.",
"technologies": "Dataverse; Model-driven Power Apps; JavaScript; Power Automate"
},
"41": {
"name": "Power Apps Code App CI/CD Pipeline",
"area": "ALM, Governance & Admin",
"business": "Deploy code apps safely and repeatably without manual production changes.",
"architecture": "Azure DevOps pipeline builds an artifact, deploys to Dev, then promotes to Prod with approval gate.",
"methodology": "ALM strategy, repo setup, branch policy, service principal setup, variable management, and release validation.",
"process": "Developer commits code, PR is reviewed, pipeline builds, Dev deploy validates, and Prod deploy waits for approval.",
"technologies": "Azure DevOps; YAML Pipelines; Power Platform CLI; Service Principal; Power Apps Code Apps; Git"
},
"42": {
"name": "Power Platform Solution ALM Pipeline",
"area": "ALM, Governance & Admin",
"business": "Professionalize Power Platform releases across development, testing, and production environments.",
"architecture": "Managed/unmanaged solution export-import process with pipeline automation and environment variables.",
"methodology": "Environment strategy, solution layering, source control, release gates, and rollback planning.",
"process": "Solution is built in Dev, exported to source control, validated, then imported into target environments through controlled release.",
"technologies": "Power Platform CLI; Azure DevOps; Dataverse Solutions; Environment Variables; Git"
},
"43": {
"name": "Azure DevOps Branching and Pull Request Governance",
"area": "ALM, Governance & Admin",
"business": "Protect production assets by requiring code review and structured branching.",
"architecture": "Repository with feature branches, PR policies, protected main branch, and build validation.",
"methodology": "Git workflow design, branch-policy setup, peer review, and release governance.",
"process": "Changes start in feature branch, PR validates and reviews, merge triggers build/deploy workflow.",
"technologies": "Azure DevOps Repos; Git; Branch Policies; Pull Requests; YAML"
},
"44": {
"name": "Power Platform Environment Strategy",
"area": "ALM, Governance & Admin",
"business": "Separate development, testing, and production work to reduce risk and improve lifecycle control.",
"architecture": "Dedicated Power Platform environments with role separation, solution movement, and governed connectors.",
"methodology": "Tenant/environment assessment, risk classification, DLP alignment, and deployment path design.",
"process": "Makers build in Dev, testers validate in Test, and approved releases move to Prod using managed solutions.",
"technologies": "Power Platform Admin Center; Dataverse Environments; Solutions; DLP Policies"
},
"45": {
"name": "Service Principal and App Registration Setup",
"area": "ALM, Governance & Admin",
"business": "Avoid user-owned deployments by using application identities for automated release pipelines.",
"architecture": "Entra ID app registration, service principal, client secret/certificate, and Power Platform permissions.",
"methodology": "Identity design, least-privilege permissions, secret governance, and pipeline connection testing.",
"process": "Admin creates app registration, grants environment access, stores credentials securely, and pipeline authenticates non-interactively.",
"technologies": "Entra ID; Service Principals; Azure DevOps Library; Power Platform CLI"
},
"46": {
"name": "Power Platform DLP and Connector Governance",
"area": "ALM, Governance & Admin",
"business": "Control which connectors can be used together and reduce data-loss risk.",
"architecture": "Tenant/environment DLP policies classify connectors and apply business/non-business restrictions.",
"methodology": "Connector inventory, risk grouping, policy design, exception process, and maker communication.",
"process": "Admin defines DLP policy; makers build within allowed connector combinations; exceptions follow governance review.",
"technologies": "Power Platform Admin Center; DLP Policies; Connectors; Governance"
},
"47": {
"name": "Dataverse Auditing and Audit History Governance",
"area": "ALM, Governance & Admin",
"business": "Enable audit history while preventing non-admin users from accessing sensitive audit details.",
"architecture": "Table and column auditing with security role controls around audit-read privileges.",
"methodology": "Compliance requirement review, audit-scope selection, privilege testing, and admin documentation.",
"process": "Important tables/fields are audited; admins review history; non-admin visibility is restricted through security roles.",
"technologies": "Dataverse Auditing; Security Roles; Model-driven Apps; Compliance"
},
"48": {
"name": "Power BI Embedded in Model-Driven Apps",
"area": "ALM, Governance & Admin",
"business": "Surface business intelligence inside the operational app so users do not switch tools.",
"architecture": "Power BI dashboard/report embedded into model-driven app areas with workspace and permissions alignment.",
"methodology": "Workspace validation, dashboard selection, app integration testing, and permissions troubleshooting.",
"process": "User opens model-driven app and views embedded report tiles with current operational metrics.",
"technologies": "Power BI; Model-driven Power Apps; Dataverse; Workspaces; Dashboards"
},
"49": {
"name": "Dataflow Refresh Monitor",
"area": "ALM, Governance & Admin",
"business": "Give users/admins visibility into dataflow refresh status, errors, and timestamps from inside the business app.",
"architecture": "Button triggers flow that calls Power BI/dataflow APIs and stores or returns refresh status JSON to Dataverse.",
"methodology": "API exploration, JSON schema design, error-handling strategy, and form notification design.",
"process": "User clicks monitor button; flow checks refresh history; app displays success, error code, message, start time, and end time.",
"technologies": "Power Automate; Power BI Dataflows; Dataverse; JSON; HTTP/API"
},
"50": {
"name": "Part Estimate Change Tracking System",
"area": "ALM, Governance & Admin",
"business": "Track estimated-time changes for parts and preserve history instead of overwriting values during refresh.",
"architecture": "Dataflows upsert current part estimates into Dataverse and write changes into a separate history table.",
"methodology": "Delta detection, alternate-key strategy, history-table design, and refresh testing with large datasets.",
"process": "Nightly refresh compares incoming estimate to current value; changed records create history rows with old/new values.",
"technologies": "Power BI Dataflows; Dataverse; Alternate Keys; Power Automate; Power BI"
},
"51": {
"name": "Dataverse Alternate Key Upsert Design",
"area": "ALM, Governance & Admin",
"business": "Keep integrated data synchronized without relying on internal primary keys.",
"architecture": "Business keys are defined as Dataverse alternate keys and used by dataflows or integrations for upserts.",
"methodology": "Key selection, uniqueness validation, import testing, and duplicate remediation.",
"process": "Integration sends external identifier; Dataverse matches existing record or creates a new one based on alternate key.",
"technologies": "Dataverse; Alternate Keys; Dataflows; Power Query"
},
"52": {
"name": "Power BI Query from Dataverse Operational Data",
"area": "ALM, Governance & Admin",
"business": "Allow users to answer operational questions such as estimated time by part using Dataverse data.",
"architecture": "Power BI model reads Dataverse tables and exposes measures/filters for part-level analysis.",
"methodology": "Dataset modeling, filter design, relationship validation, and business-user testing.",
"process": "User selects part number; report returns estimated time, change history, and related operational metrics.",
"technologies": "Power BI; Dataverse; Power Query; DAX"
},
"53": {
"name": "Private GitHub Repository for Power Platform Assets",
"area": "ALM, Governance & Admin",
"business": "Create a source-control home for flows, apps, solution exports, scripts, and documentation.",
"architecture": "Private repo organized by solution/app/flow with export packages and documentation folders.",
"methodology": "Repository structure design, branch naming, commit discipline, and asset export process.",
"process": "Makers export assets, commit to repo, use branches/PRs, and maintain version history.",
"technologies": "GitHub; Git; Power Platform Solutions; Power Automate Export; Documentation"
},
"54": {
"name": "Copilot Studio SOP and Tech Tip Advisor",
"area": "Copilot, AI & Knowledge Agents",
"business": "Help employees find answers from SOP and technical-tip documents without manually searching SharePoint libraries.",
"architecture": "Copilot Studio agent connects to SharePoint knowledge, uses generative answers, and includes fallback/greeting topic handling.",
"methodology": "Knowledge-source selection, topic design, testing against real SOP/TT questions, and conversation monitoring.",
"process": "User asks a SOP/TT question; agent searches knowledge; answer is returned with context and fallback handling when not found.",
"technologies": "Copilot Studio; SharePoint; Generative Answers; Topics; Power Automate"
},
"55": {
"name": "Copilot Studio Generative Answers Fallback Design",
"area": "Copilot, AI & Knowledge Agents",
"business": "Improve answer reliability when the agent does not match a manual topic or recognized intent.",
"architecture": "Conversation routes from trigger topics to generative answer node and fallback escalation pattern.",
"methodology": "Intent testing, fallback path design, phrase coverage review, and transcript-based tuning.",
"process": "User asks unmatched question; fallback searches knowledge and returns answer or asks for clarification/escalation.",
"technologies": "Copilot Studio; Generative Answers; Topics; Knowledge Sources"
},
"56": {
"name": "Copilot Studio Conversation Transcript Monitoring",
"area": "Copilot, AI & Knowledge Agents",
"business": "Review user conversations to understand failures, improve topics, and validate agent performance.",
"architecture": "Copilot Studio analytics/transcripts are used with monitoring workflow and issue tracking.",
"methodology": "Test conversation review, failure categorization, iterative topic improvement, and knowledge-gap closure.",
"process": "Admin opens transcript, identifies where the agent failed, updates topics/knowledge, then retests.",
"technologies": "Copilot Studio; Conversation Transcripts; Analytics; Topics"
},
"57": {
"name": "Copilot Studio Agent Flow Reuse and Cost Control",
"area": "Copilot, AI & Knowledge Agents",
"business": "Safely duplicate, convert, and reuse agent flows while understanding Copilot credit consumption.",
"architecture": "Power Automate flows are copied into the right solution and exposed through agent-callable triggers/responses.",
"methodology": "Flow inventory, solution placement, trigger conversion, response schema design, and cost monitoring.",
"process": "Maker copies a flow, adds agent trigger/response, connects to Copilot Studio, and monitors capacity usage.",
"technologies": "Copilot Studio; Power Automate; Agent Flows; Solutions; Copilot Credits"
},
"58": {
"name": "Copilot Studio Computer Use Hosted Browser Setup",
"area": "Copilot, AI & Knowledge Agents",
"business": "Enable agents to interact with browser-based systems when APIs are not available.",
"architecture": "Hosted browser capability is configured with tenant settings and cross-geo/data-boundary considerations.",
"methodology": "Environment readiness check, tenant policy review, browser task design, and troubleshooting.",
"process": "Admin enables required settings; agent uses hosted browser for defined task; errors are diagnosed through configuration checks.",
"technologies": "Copilot Studio; Computer Use; Hosted Browser; Tenant Admin Settings"
},
"59": {
"name": "Copilot Studio Bring Your Own Machine Setup",
"area": "Copilot, AI & Knowledge Agents",
"business": "Use a controlled machine for agent computer-use scenarios when hosted browser is not enough.",
"architecture": "Machine runtime connects desktop environment to Copilot Studio automation with Windows/runtime prerequisites.",
"methodology": "Prerequisite validation, runtime installation, machine registration, and test automation run.",
"process": "Admin prepares machine, installs runtime, registers connection, and tests a controlled browser/desktop task.",
"technologies": "Copilot Studio; Power Automate Machine Runtime; Windows; BYOM"
},
"60": {
"name": "Teams Channel App ID and SSO Setup for Copilot Studio Agents",
"area": "Copilot, AI & Knowledge Agents",
"business": "Resolve Teams publishing/authentication issues by locating or creating the correct application identity.",
"architecture": "Teams channel settings, app registration/App ID, and SSO configuration align agent publishing with tenant authentication.",
"methodology": "Configuration walkthrough, manual App ID setup, authentication validation, and submission troubleshooting.",
"process": "Admin finds or creates App ID, fills SSO settings, submits agent to catalog, and verifies Teams availability.",
"technologies": "Copilot Studio; Microsoft Teams; Entra ID App Registration; SSO; Teams Channel"
},
"61": {
"name": "Microsoft 365 Copilot Adoption Program",
"area": "Copilot, AI & Knowledge Agents",
"business": "Teach non-technical users what Copilot is, where it fits, and how to adopt it safely.",
"architecture": "Adoption framework combines use-case selection, training, governance, metrics, and role-based scenarios.",
"methodology": "Discovery, pilot, champions, training, feedback loop, and scale-out roadmap.",
"process": "Identify high-value scenarios, run pilot, capture success stories, train users, and monitor adoption metrics.",
"technologies": "Microsoft 365 Copilot; Teams; Outlook; Word; PowerPoint; SharePoint; Copilot Studio"
},
"62": {
"name": "Microsoft 365 Copilot SharePoint Knowledge Agent",
"area": "Copilot, AI & Knowledge Agents",
"business": "Create a lightweight agent that answers questions from a SharePoint folder or site knowledge base.",
"architecture": "Agent Builder connects Microsoft 365 Copilot to selected SharePoint knowledge sources with permissions trimming.",
"methodology": "Knowledge scoping, prompt/instruction design, testing, and content-governance review.",
"process": "User asks the agent a question; Copilot searches allowed SharePoint content and generates a contextual answer.",
"technologies": "Microsoft 365 Copilot; Agent Builder; SharePoint; Microsoft Graph; Permissions"
},
"63": {
"name": "Manufacturing Agent Examples in Agent Builder",
"area": "Copilot, AI & Knowledge Agents",
"business": "Design role-specific agents for manufacturing teams such as SOP help, quality lookup, maintenance help, and project status.",
"architecture": "Each agent uses SharePoint/Dataverse knowledge and scoped instructions for a specific manufacturing workflow.",
"methodology": "Use-case selection, knowledge-source preparation, instruction writing, testing, and rollout planning.",
"process": "Select scenario, prepare documents/data, configure agent, test sample questions, and publish to users.",
"technologies": "Microsoft 365 Copilot; Agent Builder; SharePoint; Dataverse; Teams"
},
"64": {
"name": "Manual Agent Management in Microsoft 365 Admin Center",
"area": "Copilot, AI & Knowledge Agents",
"business": "Help admins govern, review, and manage agents after they are created.",
"architecture": "Admin center provides inventory, publishing, ownership, and management controls for agents.",
"methodology": "Admin operations mapping, governance checklist, and step-by-step documentation.",
"process": "Admin reviews available agents, checks settings/ownership, manages availability, and documents governance decisions.",
"technologies": "Microsoft 365 Admin Center; Copilot Agents; Entra ID; Governance"
},
"65": {
"name": "Copilot Cowork Meeting Preparation Routine",
"area": "Copilot, AI & Knowledge Agents",
"business": "Show how Cowork can prepare meeting context using calendar, email, files, and connected deliverables.",
"architecture": "Cowork retrieves Microsoft 365 work context and produces meeting prep summaries or documents.",
"methodology": "Demo-script design, data-source mapping, prompt pattern design, and scenario testing.",
"process": "Before meeting, user asks Cowork for prep; Cowork checks related context and drafts agenda, summary, or follow-up materials.",
"technologies": "Copilot Cowork; Microsoft 365 Copilot; Outlook; Calendar; SharePoint; Word"
},
"66": {
"name": "Copilot Cowork Scheduled Prompt Routine",
"area": "Copilot, AI & Knowledge Agents",
"business": "Turn repeated daily preparation into scheduled prompts instead of asking the same thing each morning.",
"architecture": "Cowork scheduled task runs a saved prompt and appears in the Tasks view for management.",
"methodology": "Routine design, prompt refinement, task scheduling, and outcome review.",
"process": "User creates recurring task; Cowork prepares calendar/email/work summary; user manages future runs from Tasks.",
"technologies": "Copilot Cowork; Scheduled Prompts; Microsoft 365; Tasks View"
},
"67": {
"name": "Copilot Cowork Skills and SKILL.md Framework",
"area": "Copilot, AI & Knowledge Agents",
"business": "Make Copilot Cowork behavior repeatable through documented skill instructions.",
"architecture": "SKILL.md files define goals, constraints, steps, examples, and troubleshooting patterns for Cowork.",
"methodology": "Instruction design, pattern library creation, test prompts, and refinement based on outputs.",
"process": "Create SKILL.md, describe process rules, test Cowork behavior, update instructions, and reuse across scenarios.",
"technologies": "Copilot Cowork; SKILL.md; Markdown; Prompt Engineering"
},
"68": {
"name": "Dataverse MCP Plugin for Copilot Cowork",
"area": "Copilot, AI & Knowledge Agents",
"business": "Allow Copilot Cowork to query Dataverse business data through a structured plugin pattern.",
"architecture": "Cowork plugin uses MCP endpoint, OAuth/plugin vault, Dataverse security, and schema-aware skill instructions.",
"methodology": "Architecture flow design, endpoint planning, authentication mapping, schema scoping, and test queries.",
"process": "User asks Cowork a business-data question; plugin authenticates, queries Dataverse, and returns governed results.",
"technologies": "Copilot Cowork; Model Context Protocol; Dataverse API; OAuth; Plugin Vault; SKILL.md"
},
"69": {
"name": "Dataverse MCP search_data vs Azure RAG Comparison",
"area": "Copilot, AI & Knowledge Agents",
"business": "Choose the right AI data-access pattern for Dataverse scenarios: direct structured search or full retrieval-augmented generation.",
"architecture": "Comparison of MCP direct Dataverse search versus Azure AI Search RAG indexing pipeline.",
"methodology": "Decision-matrix design, use-case comparison, cost/complexity evaluation, and architecture recommendation.",
"process": "Assess whether the use case needs live structured records or document-style semantic retrieval, then pick MCP or Azure RAG.",
"technologies": "Dataverse MCP; Azure AI Search; Azure Functions; Copilot; RAG; Power Platform"
},
"70": {
"name": "MCP Plugin with ngrok and Teams Sideloading",
"area": "Copilot, AI & Knowledge Agents",
"business": "Test a local MCP endpoint with Copilot/Cowork or Teams package before production hosting.",
"architecture": "Local MCP server exposed through ngrok URL, referenced in ai-plugin package, zipped, and sideloaded into Teams.",
"methodology": "Local development, secure tunnel setup, manifest update, package testing, and troubleshooting.",
"process": "Run local endpoint, create ngrok tunnel, update plugin URL, zip appPackage, sideload in Teams, and test tools/list or endpoint responses.",
"technologies": "MCP; ngrok; Teams App Package; ai-plugin.json; Node.js; Localhost"
},
"71": {
"name": "Copilot Cowork Plugin Architecture Flow",
"area": "Copilot, AI & Knowledge Agents",
"business": "Explain end-to-end plugin architecture so non-developers can understand how Cowork connects to business systems.",
"architecture": "User prompt flows through Cowork plugin, OAuth vault, MCP endpoint, Dataverse security, schema-aware skill, and response output.",
"methodology": "Architecture diagramming, component explanation, security-first sequencing, and demo narrative design.",
"process": "Request enters Cowork, plugin authenticates, data is queried securely, and Cowork formats a useful answer.",
"technologies": "Copilot Cowork; MCP; OAuth; Dataverse; Architecture Diagrams; SKILL.md"
},
"72": {
"name": "ProjectHub Work IQ Examples",
"area": "Copilot, AI & Knowledge Agents",
"business": "Demonstrate how Copilot could reason over ProjectHub tasks, projects, blockers, and priorities.",
"architecture": "Work IQ prompts connect ProjectHub data concepts to Microsoft 365 Copilot/Copilot Studio response patterns.",
"methodology": "Scenario design, prompt library creation, business-role mapping, and demo preparation.",
"process": "User asks project-status questions; Copilot summarizes blockers, overdue work, next actions, and owner responsibilities.",
"technologies": "Microsoft 365 Copilot; Copilot Studio; Dataverse; ProjectHub; Prompt Design"
},
"73": {
"name": "Azure RAG for Power Platform Knowledge",
"area": "Copilot, AI & Knowledge Agents",
"business": "Build a richer AI retrieval pattern when SharePoint knowledge or direct Dataverse search is not enough.",
"architecture": "Documents/data are indexed in Azure AI Search and accessed through API/Azure Function pattern for grounded answers.",
"methodology": "Source selection, chunking/index design, retrieval testing, security review, and response-quality tuning.",
"process": "Content is ingested, indexed, searched semantically, and returned to an agent or app as grounded context.",
"technologies": "Azure AI Search; Azure Functions; Power Platform; Copilot Studio; RAG; APIs"
},
"74": {
"name": "AI Builder Document Processing Architecture",
"area": "Copilot, AI & Knowledge Agents",
"business": "Extract structured fields from business documents to reduce manual entry and improve downstream automation.",
"architecture": "AI Builder model reads uploaded documents, extracts fields, and Power Automate writes results to Dataverse or SharePoint.",
"methodology": "Sample collection, model training, field mapping, confidence threshold design, and human-review workflow.",
"process": "User uploads document; AI Builder extracts values; low-confidence fields route for review; approved data updates business records.",
"technologies": "AI Builder; Power Automate; Dataverse; SharePoint; Power Apps"
},
"75": {
"name": "AI Builder Document Classification for Engineering Content",
"area": "Copilot, AI & Knowledge Agents",
"business": "Automatically classify uploaded engineering/SOP documents so metadata and routing are more consistent.",
"architecture": "AI Builder classification model identifies document category and triggers metadata update or approval workflow.",
"methodology": "Training-set preparation, category definition, validation testing, and exception handling.",
"process": "Document is added to library; classifier predicts type; automation updates metadata and sends exceptions for manual review.",
"technologies": "AI Builder; SharePoint; Power Automate; Dataverse"
},
"76": {
"name": "SharePoint Engineering Document Search System",
"area": "SharePoint & Microsoft 365",
"business": "Make engineering files such as SOP, Tech Tip, STP, DXML, PDF, and images easier to find.",
"architecture": "SharePoint library search, reindexing, metadata, and API/search troubleshooting improve findability.",
"methodology": "Search-behavior analysis, indexing setting review, metadata improvement, and test queries by file type.",
"process": "Documents are stored in libraries; reindexing and metadata changes improve search; users search library/site for relevant files.",
"technologies": "SharePoint Online; SharePoint Search; REST API; Metadata; Reindexing"
},
"77": {
"name": "SharePoint File Type Indexing Troubleshooting",
"area": "SharePoint & Microsoft 365",
"business": "Resolve cases where files like DXML or STP do not appear correctly in search results.",
"architecture": "Library settings, search schema behavior, and content indexing are evaluated for nonstandard files.",
"methodology": "Root-cause troubleshooting, test uploads, reindex requests, and search-result verification.",
"process": "Admin checks library/site search behavior, adjusts settings, reindexes, and validates results for affected file types.",
"technologies": "SharePoint Search; Document Libraries; Search Schema; Reindexing"
},
"78": {
"name": "Modern SharePoint Hub Architecture",
"area": "SharePoint & Microsoft 365",
"business": "Move from fragmented or classic site structure to a modern department-based hub architecture.",
"architecture": "Root/site planning, hub association, department sites, navigation, and permissions model.",
"methodology": "Information architecture design, department mapping, permission planning, and staged migration.",
"process": "Create/modernize hub, associate department sites, configure navigation, and guide users to the right content areas.",
"technologies": "SharePoint Online; Hub Sites; Site Navigation; Permissions"
},
"79": {
"name": "Department Site Navigation and Permissions",
"area": "SharePoint & Microsoft 365",
"business": "Organize manufacturing departments such as Engineering, QC, Production, Purchasing, and Shipping into clear SharePoint areas.",
"architecture": "Department sites/libraries use security groups, navigation, and consistent document structures.",
"methodology": "Stakeholder mapping, permission matrix, content inventory, and governance documentation.",
"process": "Departments get sites/libraries; owners manage content; users access only the areas they need.",
"technologies": "SharePoint Online; Microsoft 365 Groups; Security Groups; Permissions"
},
"80": {
"name": "ProjectHub Sensitivity Label Policy",
"area": "SharePoint & Microsoft 365",
"business": "Protect ProjectHub content with a confidential label applied to the correct SharePoint site/group.",
"architecture": "Microsoft Purview sensitivity label targets groups and sites and applies container-level security settings.",
"methodology": "Policy readiness check, group/site targeting, label configuration, and validation.",
"process": "Admin configures label/policy, applies it to ProjectHub site, and verifies site confidentiality behavior.",
"technologies": "Microsoft Purview; Sensitivity Labels; SharePoint; Microsoft 365 Admin Center"
},
"81": {
"name": "Confidential Content Processing for Encrypted Office Files",
"area": "SharePoint & Microsoft 365",
"business": "Allow encrypted sensitivity-labeled Office files in SharePoint/OneDrive to be processed where required by organizational settings.",
"architecture": "Tenant-level configuration controls content processing for encrypted labeled files, with additional considerations for multi-geo setups.",
"methodology": "Tenant setting review, risk assessment, admin configuration, and validation with sample documents.",
"process": "Admin enables required setting, confirms policy prerequisites, and tests access/search/processing behavior.",
"technologies": "Microsoft Purview; SharePoint Online; OneDrive; Sensitivity Labels; Tenant Settings"
},
"82": {
"name": "Sales and Engineering Document Management Architecture",
"area": "SharePoint & Microsoft 365",
"business": "Create a clean file structure for sales, engineering, CAD, and manufacturing documents.",
"architecture": "SharePoint libraries and folders align to Dynamics/Power Platform records, teams, and security needs.",
"methodology": "Content lifecycle mapping, taxonomy design, permissions planning, and adoption guidance.",
"process": "Documents are stored by customer/project/item/category; links or metadata connect them to business records.",
"technologies": "SharePoint; Dynamics 365 Sales; Teams; Dataverse; Security Groups"
},
"83": {
"name": "SharePoint Skills Gallery SPFx Command Set Concept",
"area": "SharePoint & Microsoft 365",
"business": "Enhance SharePoint lists with a custom command for surfacing skills or portfolio-style content.",
"architecture": "SPFx ListView Command Set extends SharePoint list UI with custom action behavior.",
"methodology": "Extension analysis, setup documentation, command behavior definition, and deployment planning.",
"process": "User selects list item or command; extension performs custom action or opens related skill information.",
"technologies": "SharePoint Framework; SPFx; TypeScript; ListView Command Set; SharePoint Lists"
},
"84": {
"name": "Microsoft Forms to SharePoint/Dataverse Intake Automation",
"area": "SharePoint & Microsoft 365",
"business": "Collect structured requests from users and route them into lists or Dataverse tables without manual copying.",
"architecture": "Forms submission triggers Power Automate, which validates response data and creates records/tasks.",
"methodology": "Form design, data mapping, flow build, error handling, and user notification design.",
"process": "User submits form; flow writes request to data store, sends confirmation, and triggers next-step assignment.",
"technologies": "Microsoft Forms; Power Automate; SharePoint Lists; Dataverse; Outlook"
},
"85": {
"name": "Dynamics 365 Sales End-to-End Training Lab",
"area": "Dynamics 365 Sales",
"business": "Build a practical learning environment for the full sales process from lead to invoice-style handoff.",
"architecture": "Dynamics 365 Sales app with sample data, configured entities, BPF, product catalog, dashboards, and collaboration integrations.",
"methodology": "Scenario-based lab design, step-by-step training, guided practice, and validation through sample records.",
"process": "User creates leads, qualifies them, manages opportunities, creates quotes/orders/invoices, and reviews dashboards.",
"technologies": "Dynamics 365 Sales; Dataverse; Business Process Flows; Dashboards; Teams; SharePoint"
},
"86": {
"name": "Lead Lifecycle and Backlog Cleanup",
"area": "Dynamics 365 Sales",
"business": "Manage lead creation, qualification, disqualification, reactivation, and backlog cleanup consistently.",
"architecture": "Dynamics 365 Sales lead views, forms, statuses, and process guidance support the lifecycle.",
"methodology": "Process definition, view/filter design, user training, and cleanup prioritization.",
"process": "Sales user reviews lead backlog, qualifies promising leads, disqualifies invalid ones, and reactivates when needed.",
"technologies": "Dynamics 365 Sales; Dataverse; Views; Business Process Flow"
},
"87": {
"name": "Product Catalog and Price List Configuration",
"area": "Dynamics 365 Sales",
"business": "Standardize products, units, prices, and discounts so quotes are accurate.",
"architecture": "Sales product catalog uses unit groups, price lists, discount lists, product families, and products.",
"methodology": "Catalog modeling, price setup, test quoting, and validation with sample scenarios.",
"process": "Admin creates unit groups and products, assigns price lists, applies discounts, and validates quote calculations.",
"technologies": "Dynamics 365 Sales; Product Catalog; Price Lists; Unit Groups; Discount Lists"
},
"88": {
"name": "Opportunity-to-Quote-to-Order Sales Process",
"area": "Dynamics 365 Sales",
"business": "Guide sellers from opportunity development to formal quote and order records.",
"architecture": "Dynamics Sales process stages connect opportunity, quote, order, and invoice-style entities.",
"methodology": "BPF mapping, record relationship validation, product-line testing, and training documentation.",
"process": "Seller develops opportunity, adds products, generates quote, activates or revises quote, and converts to order.",
"technologies": "Dynamics 365 Sales; Opportunities; Quotes; Orders; Dataverse; BPF"
},
"89": {
"name": "Custom Sales Business Process Flow",
"area": "Dynamics 365 Sales",
"business": "Add organization-specific sales controls such as executive confirmation for very large opportunities.",
"architecture": "Customized BPF adds stage/step requirements and conditional process guidance.",
"methodology": "Requirement review, BPF customization, stage testing, and user guidance.",
"process": "Opportunity moves through stages; high-value deal prompts required confirmation before advancing.",
"technologies": "Dynamics 365 Sales; Business Process Flows; Dataverse; Business Rules"
},
"90": {
"name": "Seller Assignment and Routing Rules",
"area": "Dynamics 365 Sales",
"business": "Send the right work to the right seller based on skills, territory, capacity, or business criteria.",
"architecture": "Segments, assignment rules, seller attributes, capacity rules, and routing logic distribute records.",
"methodology": "Routing-criteria discovery, rule design, test scenarios, and load-balancing validation.",
"process": "New lead/opportunity enters segment; assignment rule evaluates criteria; seller receives work according to routing model.",
"technologies": "Dynamics 365 Sales; Assignment Rules; Segments; Seller Attributes; Capacity"
},
"91": {
"name": "Sequences and Sales Engagement Setup",
"area": "Dynamics 365 Sales",
"business": "Create repeatable seller follow-up steps for leads and opportunities.",
"architecture": "Sales sequences define email/call/task steps connected to matching segments or records.",
"methodology": "Sales cadence design, step mapping, connection to records, and adoption testing.",
"process": "Seller enrolls records in sequence; system suggests or creates next actions; seller follows guided cadence.",
"technologies": "Dynamics 365 Sales; Sequences; Segments; Activities"
},
"92": {
"name": "Manager Sales Dashboard and Visibility Model",
"area": "Dynamics 365 Sales",
"business": "Give managers visibility across team opportunities while normal sellers see their own records.",
"architecture": "Dashboards, views, and security roles separate manager all-record access from user-owned access.",
"methodology": "Role analysis, dashboard design, security testing, and reporting validation.",
"process": "Seller works personal pipeline; manager dashboard aggregates closed opportunities and team performance.",
"technologies": "Dynamics 365 Sales; Dashboards; Security Roles; Views; Dataverse"
},
"93": {
"name": "ADP Workforce Now Certificate-Based API Integration",
"area": "Integration, Azure & APIs",
"business": "Integrate HR/payroll data securely without exposing certificates or calling ADP directly from low-code apps.",
"architecture": "Azure Function proxy authenticates to ADP using certificate stored in Key Vault; custom connector calls the function endpoints.",
"methodology": "API collection review, secure authentication design, endpoint mapping, connector build, and test calls.",
"process": "Power Apps/flows call custom connector; Azure Function signs/authenticates request to ADP; response returns normalized JSON.",
"technologies": "Azure Functions; C#/.NET; Azure Key Vault; Certificates; ADP WFN API; Custom Connectors; Power Automate"
},
"94": {
"name": "Azure Function Proxy for Enterprise APIs",
"area": "Integration, Azure & APIs",
"business": "Protect backend credentials and simplify complex API calls for Power Platform makers.",
"architecture": "Azure Function exposes clean endpoints, handles authentication/secrets, and returns Power Platform-friendly JSON.",
"methodology": "API abstraction, secure secret storage, endpoint design, logging, and connector testing.",
"process": "App or flow calls proxy endpoint; function handles backend API details and returns simplified response.",
"technologies": "Azure Functions; C#; REST API; JSON; Custom Connectors; Power Apps; Power Automate"
},
"95": {
"name": "Azure Key Vault Secret and Certificate Pattern",
"area": "Integration, Azure & APIs",
"business": "Keep API certificates and secrets out of apps, flows, and source code.",
"architecture": "Key Vault stores secrets/certificates and Azure Functions retrieve them using managed identity or secure configuration.",
"methodology": "Secret-management design, access policy/RBAC configuration, connection testing, and rotation planning.",
"process": "Function requests secret from Key Vault at runtime and uses it to authenticate to external service.",
"technologies": "Azure Key Vault; Managed Identity; Azure Functions; Certificates; RBAC"
},
"96": {
"name": "GSS ERP REST API Custom Connector",
"area": "Integration, Azure & APIs",
"business": "Connect legacy ERP data to Power Platform apps and automations through a reusable connector.",
"architecture": "Custom connector wraps GSS REST API endpoints and exposes them to apps/flows with consistent schemas.",
"methodology": "Endpoint discovery, OpenAPI/schema design, authentication setup, test operations, and error handling.",
"process": "Maker selects connector action in app/flow, sends parameters, and receives ERP data mapped into Dataverse or UI.",
"technologies": "Custom Connectors; REST API; Power Automate; Power Apps; Dataverse; JSON"
},
"97": {
"name": "PostgreSQL ERP Data Integration",
"area": "Integration, Azure & APIs",
"business": "Bring legacy or operational PostgreSQL data into Microsoft reporting and app workflows.",
"architecture": "Data connection queries PostgreSQL and synchronizes selected entities into Dataverse or Power BI models.",
"methodology": "Source analysis, query design, refresh planning, data mapping, and validation against source system.",
"process": "Data is extracted from PostgreSQL, transformed, loaded into Microsoft data layer, and surfaced in apps/reports.",
"technologies": "PostgreSQL; Power Query; Dataflows; Dataverse; Power BI; APIs"
},
"98": {
"name": "Azure Function G-Code and Printer Data API",
"area": "Integration, Azure & APIs",
"business": "Expose printer/G-code operational data such as unique parts and printer details for apps or reporting.",
"architecture": "Azure Function endpoint parses or returns printer data and integrates with Power Platform consumers.",
"methodology": "Function migration, API contract design, test data validation, and Key Vault/network troubleshooting.",
"process": "App or flow calls function, receives printer/part data, and uses it for operational display or downstream processing.",
"technologies": "Azure Functions v4; C#; REST API; Key Vault; Power Automate; Dataverse"
},
"99": {
"name": "Custom Connector Error Handling and OAuth Design",
"area": "Integration, Azure & APIs",
"business": "Make custom connectors more reliable and secure for production use.",
"architecture": "Connector definitions include authentication, request schemas, response schemas, and error outputs that apps/flows can handle.",
"methodology": "Authentication decision, OpenAPI refinement, test matrix, and maker-friendly error messages.",
"process": "Connector operation is called; errors return structured messages; app/flow uses them for notifications or retries.",
"technologies": "Custom Connectors; OpenAPI; OAuth; REST API; Power Automate; Power Apps"
},
"100": {
"name": "ODBC to Excel/Power Query Data Troubleshooting",
"area": "Integration, Azure & APIs",
"business": "Resolve data-preview and credential issues when connecting legacy ODBC data sources to reporting tools.",
"architecture": "ODBC DSN connects external data source to Excel/Power Query for analysis or transformation.",
"methodology": "Connection-string review, credential validation, DSN testing, and query diagnostics.",
"process": "User configures DSN, tests connection, previews data, and fixes credential or query issues.",
"technologies": "ODBC; Excel; Power Query; Data Source Credentials"
},
"101": {
"name": "Portfolio Intelligence & Governance Agent",
"area": "Copilot, AI & Knowledge Agents",
"business": "Read-only PMO and executive agent that returns a portfolio health snapshot and flags at-risk projects across the whole portfolio.",
"architecture": "",
"methodology": "",
"process": "",
"technologies": "Copilot Studio; Multi-Agent; Dataverse; Read-only PMO Lens; Power Automate"
},
"102": {
"name": "Program & Sub-Projects Agent",
"area": "Copilot, AI & Knowledge Agents",
"business": "Rolls child projects up to a parent program and manages the parent-project link, with writes confirmed by the user first.",
"architecture": "",
"methodology": "",
"process": "",
"technologies": "Copilot Studio; Dataverse; Program Hierarchy Rollups; Confirmed Writes"
},
"103": {
"name": "ProjectHub Hub-and-Spoke Orchestrator",
"area": "Copilot, AI & Knowledge Agents",
"business": "Hub orchestrator that routes each request to the right connected agent and keeps context across turns.",
"architecture": "",
"methodology": "",
"process": "",
"technologies": "Copilot Studio; Orchestrator Routing; Connected Agents; Topics"
},
"104": {
"name": "Multi-Turn Agent Conversation Testing (S1/S2)",
"area": "Copilot, AI & Knowledge Agents",
"business": "Scripted multi-turn test scenarios (S1/S2) that validate agent context retention and routing before release.",
"architecture": "",
"methodology": "",
"process": "",
"technologies": "Copilot Studio; Multi-turn Context; Test Scripts; Agent QA"
},
"105": {
"name": "Copilot Studio Observability with Application Insights",
"area": "Copilot, AI & Knowledge Agents",
"business": "Instruments Copilot Studio agents with Application Insights and KQL to see custom events, errors, and session trends.",
"architecture": "",
"methodology": "",
"process": "",
"technologies": "Application Insights; KQL; Azure; Telemetry; Dashboard Workbook"
},
"106": {
"name": "MCP Interactive UI Samples — Testing & Security",
"area": "Copilot, AI & Knowledge Agents",
"business": "Tests Microsoft's MCP interactive-UI sample servers with the MCP Inspector and hardens them before building a custom ProjectHub MCP.",
"architecture": "",
"methodology": "",
"process": "",
"technologies": "MCP; MCP Inspector; Node.js; Security; Microsoft 365 Copilot"
},
"107": {
"name": "Skill vs Connected Agent Architecture",
"area": "Copilot, AI & Knowledge Agents",
"business": "Decision framework for structuring multi-agent systems so multi-turn follow-ups don't break.",
"architecture": "",
"methodology": "",
"process": "",
"technologies": "Copilot Studio; Multi-Agent; Orchestration; Multi-turn Context"
},
"108": {
"name": "Agent Builder vs Copilot Studio Decision Guide",
"area": "Copilot, AI & Knowledge Agents",
"business": "Guidance on which tool a Microsoft 365 Copilot license should use — Agent Builder vs Copilot Studio — for a given agent.",
"architecture": "",
"methodology": "",
"process": "",
"technologies": "Microsoft 365 Copilot; Agent Builder; Copilot Studio; Licensing"
},
"109": {
"name": "ProjectHub Executive Dashboard Widget (MCP Apps)",
"area": "Copilot, AI & Knowledge Agents",
"business": "Turns a Dataverse Run-a-Prompt result into a visual executive dashboard widget rendered inside Microsoft 365 Copilot.",
"architecture": "",
"methodology": "",
"process": "",
"technologies": "MCP Apps; Run a Prompt; structuredContent; Dataverse; M365 Copilot"
},
"110": {
"name": "Microsoft 365 Copilot Cost Management",
"area": "ALM, Governance & Admin",
"business": "Configures Copilot credit spending limits, alerts, and billing method from the Microsoft 365 admin center.",
"architecture": "",
"methodology": "",
"process": "",
"technologies": "M365 Admin Center; Copilot Credits; Spending Limits; Alerts; Billing"
},
"111": {
"name": "Microsoft 365 Copilot Prompt Catalog",
"area": "ALM, Governance & Admin",
"business": "Publishes org-wide Copilot prompts with CSV import, pinning, and adoption analytics.",
"architecture": "",
"methodology": "",
"process": "",
"technologies": "M365 Admin Center; Org Prompts; CSV Import; Adoption Analytics"
},
"112": {
"name": "SharePoint Data Access Governance Reports",
"area": "ALM, Governance & Admin",
"business": "Surfaces oversharing and sensitive-content risk across SharePoint sites before enabling Copilot agents.",
"architecture": "",
"methodology": "",
"process": "",
"technologies": "SharePoint Advanced Management; Oversharing; Permissions; Pre-Copilot Readiness"
},
"113": {
"name": "SharePoint + Purview Sensitivity Labels",
"area": "ALM, Governance & Admin",
"business": "Creates, publishes, and applies Microsoft Purview sensitivity labels so SharePoint content is correctly classified for Copilot.",
"architecture": "",
"methodology": "",
"process": "",
"technologies": "Microsoft Purview; Sensitivity Labels; SharePoint/OneDrive; Compliance"
}
,
"114": {
"name": "NCR Control Center and Approval Workflow",
"area": "Manufacturing Quality & Operations",
"business": "Centralize nonconformance records so quality users can create, review, disposition, route supplier/training actions, capture evidence, and approve NCRs from one controlled application instead of spreadsheets and email.",
"architecture": "Power Apps canvas experience over structured NCR data, with search-first list screens, KPI tiles, detail panels, multi-step workflow screens, attachment controls, and an approval workbench connected to the underlying NCR records and routing fields.",
"methodology": "Mapped the quality NCR lifecycle end to end, separated each business stage into a focused screen, designed role-specific navigation for quality users and approvers, added validation/evidence capture, and iterated on screens for fast triage and controlled closure.",
"process": "User creates or opens an NCR, enters part and issue details, captures review information, completes disposition, records training or supplier actions when required, attaches supporting evidence, routes to approval, approver reviews context and approves or rejects, and the app confirms the save or closure.",
"technologies": "Power Apps Canvas; Dataverse/SharePoint; Power Automate; Approvals; Attachments; Search and filters; Role-based navigation; Quality workflow design"
}
,
"115": {
"name": "Purchase Order Request Canvas App and Approval Inbox",
"area": "Dataverse Apps & Automation",
"business": "Give requesters and approvers one controlled procurement workspace for purchase request intake, line items, attachments, approval routing, approval decisions, and status visibility instead of spreadsheet or email-based handoffs.",
"architecture": "Dataverse-backed purchase request solution with request header, line item, attachment, approver matrix, and approval-history records. A Power Apps canvas app provides the requester portal, four-step new request wizard, approval inbox, and approval-decision screen; Power Automate and approval-routing logic move records through pending, future-pending, approved, rejected, skipped, and returned states.",
"methodology": "Mapped the requester journey and approver journey separately, designed a draft-first pattern for attachments, externalized approval routing into matrix-style records, created status tabs and KPI cards for visibility, and tested low-value, high-value, pending, future-pending, approval, rejection, and return-for-revision scenarios.",
"process": "Requester creates a purchase request, fills request information, adds line items, saves a draft, attaches supporting files or images, reviews the final summary, and submits. The system calculates totals and routes approvals. Approvers open their inbox, filter by status, review request details and history, then approve, reject, or return the request for revision with comments.",
"technologies": "Power Apps Canvas; Dataverse; Power Automate; Approval Matrix; Power Fx; Attachments; Role-based views; Procurement workflow design; Approval history"
}

,
"116": {
"name": "Copilot Cowork Project Portfolio Widgets Suite",
"area": "Copilot, AI & Knowledge Agents",
"business": "Turn raw Dataverse project data into executive-ready Copilot experiences so leaders can review portfolio health, milestones, risks, budgets, and ownership directly inside Copilot instead of reading plain-text summaries or tables.",
"architecture": "Dataverse project and project-member data is shaped through prompt/tool outputs into structuredContent contracts, then rendered as interactive Copilot / MCP Apps widgets including dashboard tabs, carousel cards, persona boards, milestone views, budget trackers, and searchable portfolio grids.",
"methodology": "Started from the PMO questions leaders actually ask, designed widget patterns for each decision scenario, mapped consistent fields and status logic across visuals, iterated on layout/readability, and kept sample-data transparency visible so outputs stayed trustworthy in demo and design review settings.",
"process": "Copilot retrieves or receives portfolio data, formats it into structured widget payloads, and renders tailored UI components such as portfolio explorers, critical-project carousels, milestone celebration cards, manager persona boards, newsletter-style summaries, budget trackers, and detailed project tables for follow-up action.",
"technologies": "Microsoft 365 Copilot; Copilot Cowork; MCP Apps / Render UI; structuredContent; Dataverse; AI Builder Run a Prompt; Widget UX; Portfolio analytics"
},
"117": {
"name": "Employee Leave Tracker Canvas App",
"area": "SharePoint & Microsoft 365",
"business": "Centralize employee leave requests, approvals, team availability, coverage handoff, and leave-status visibility in one HR canvas app instead of fragmented email, spreadsheets, and calendar follow-ups.",
"architecture": "Power Apps canvas front end connected to SharePoint lists for leave requests, employee/context fields, coverage data, approver decisions, and supporting documents. The app uses role-based navigation, dashboard cards, bounded SharePoint queries, calendar-style availability views, request queues, and detail panels for requesters, approvers, and HR managers.",
"methodology": "Separated the employee, approver, and HR manager journeys; designed SharePoint-friendly filtering and bounded data windows; added KPI cards and selected-record detail panels for fast review; and created approval/coverage checks so managers can make decisions with the necessary handoff context.",
"process": "Employee creates a leave request, selects leave type and dates, adds work handoff notes, attaches supporting documents, and submits. Approver reviews the queue, checks coverage and leave balance, then approves, rejects, or requests more information. HR and managers monitor the dashboard, team calendar, reports, and coverage alerts.",
"technologies": "Power Apps Canvas; SharePoint Lists; Power Automate; Power Fx; Approvals; Calendar UI; Attachments; Role-based navigation; HR leave workflow"
}


,
"118": {
"name": "Equipment Tracker and Preventive Maintenance System",
"area": "Manufacturing Quality & Operations",
"business": "Centralize equipment assets, preventive-maintenance criteria, scheduled work, completed maintenance records, escalations, and reporting so maintenance teams can manage equipment health from one controlled app.",
"architecture": "Power Apps canvas front end organized around MaintenancePro navigation: dashboard, equipment register, criteria/tasks, maintenance schedule, maintenance records, escalations, reports, departments, users/roles, and settings. The app works over structured equipment and maintenance records with search, filters, KPI cards, list views, form screens, and reporting summaries.",
"methodology": "Split the maintenance process into asset master data, maintenance rules, scheduled work, actual maintenance records, escalations, and reporting. Built dashboard-first visibility, then added searchable operational tables and form screens for creating equipment and criteria records.",
"process": "Maintenance users create equipment records, define preventive-maintenance criteria and frequency rules, schedule maintenance, log completed maintenance work and new hours, track escalations when work is overdue or blocked, and review reports for completion rate, active escalations, total hours, and equipment distribution by department.",
"technologies": "Power Apps Canvas; Power Fx; Equipment register; Preventive maintenance schedules; Criteria and task rules; Maintenance records; Escalation tracking; Reports; Role-based navigation"
}

};
