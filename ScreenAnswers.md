## Initial Screening Questions for Engineering Roles

### What does working in a collaborative team environment mean to you?

### Answer:

The first and foremost aspect I would look for in an environment was respect to each other. It is valueable for members to hold different views from different perspectives, no matter it is technical, organizational or politcal, and therefore should all be paid respect.

The second sign of a collaborative team would be trust. Team members should have trust and faith in each other to make technical or organizational decisions based on their best experience and knowledge. If in one's perspective the decision is completely incorrect, I wish he would be a person who would ask the reason and listen respectfully before advising a change.

The last but not the least, a highly collaborative team would also be highly productive. Everyone should share the same vision, similar value and target the same goal. The team would function autonomously, and the members would be passionate and proud of their own piece of craft.

### In your day to day work, how do you come to understand whether the work you are doing is creating value?

### Answer:

- Professional Value

  I know I am creating my professional value while I am enabling my client / employer to boost their performance or efficiency in their core business, and being able to maintain a long, healthy relationship with them.

- Relationship Value

  I know I am creating great value while I am maintaining a respectful, friendly and professional relationships with my colleagues, where my work or ideas are valuable to them, and vice versa.

- Career Value

  I know I am creating my career value while I support the junior or graduate members of the team to grow in their professional career, in the same way I was supported at the beginning of my career by my mentors.

### Do you prefer OO or Functional programming? Why? What are the core benefits of both? (It’s ok if you don’t know one, just talk about what you’re familiar with)

### Answer:

In my 14 years of development experience, most of my time was spent on OO programming until the recent years.

Prior to 2014, most of the systems I dealt with are monolith applications. They usually have multi-layer architecture and all the business logics from different domains are embedded together. Patterns like Domain-driven development are commonly being used to manage the complexity. It is almost impratical not to use OO in those eras. In a nut shell, encapsulation, polymorphim, and abstraction from OO allows the code / business logic to scale in an application.

In the last few years, micro-services architecture has grown greatly in popularity, and reduced complexity within each service. In many of cases, OO could be entirely absent from a single micro service. Many developers often choose functional programming over OO because its simpler to learn and use, have no side-effect to worry about, and is much easier to unit test.

In my opinion, for modern projects I would choose to use functional programming with typescript, and use OO only when its required to produce cleaner code. The toy robot project is a great example as the Class Robot should encapsulate its own properties and methods as the caller of Robot should only need to understand the interface of the class.

### What are the most important practices to ensure software quality (in as much detail as you can give)?

### Answer:

- Clean, testable & understandable code

  It is critical to produce code which could be easily maintained by another developer over the lifecycle of the project.

- Consistent code

  Use modern tools like ESLint, Prettier and Component Libraries to enforce consistent coding styles across the team.

- Pull request

  Lend a second pair of eyes to review the code before merge into master.

- CI / CD

  Code should be automatically build and tested before merging to master branch, which then should be automatically built and tested before prod deployment.

- Test driven development

  Code paths should have been covered by comprehensive unit tests with understandable test names.

- Service Integration tests

  Integration tests must be place for mission critical services to ensure its quality before deployment (or swapping into prod instances).

- UI Automated tests

  Use modern tools like Cypress or Selenium to test frontend APPs from end to end before releasing to prod.

- Security

  Use modern tools like Snyk.io to ensure the packages are up to date and less vunerable.

  Write defensive, secure code and deploy to secure infrastructure. Use tools like Secrets Manager to protect secrets.

### In your experience, what are the 3 most valuable software engineering practices?

### Answer:

1. Use Microservices with managable boundaries

   Architects or lead developers should use micro-services to allow quick turnaround of features and deployments, but with caution that too granular division could result in much greater management costs.

   For example one 4 men team in a company I worked with in the past divided their service into 80 micro services. They now spent days on Renovate (a way to ensure NPM modules are up to date) PR every month.

2. Automate everything

   - Developers should use infrastructure as code to manage Cloud infrastructures to allow automatic infrastructure creation and updates
   - Use CI / CD pipelines for automated build, test and deployment
   - Use Renovate / Greencover (replaced by Snyk.io) to update NPM packages automatically
   - Use Snyk.io to find security vunerabilities in NPM packages and patch automatically
   - Set monitoring, alarms and alerts which sets thresholds on performance of the system for automated ops.

3. Security, Security and Security

   - Improve the security awareness within the team
   - Implement service to service security between teams
   - Secure secret keys from infrastructural level
   - No keys should store in the build systems (Travis, CircleCI)
   - Protect PII data
