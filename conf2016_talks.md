---
layout: single
title: RSE 2016 | Talk abstracts
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

## Talk abstracts

### <a name="W1"></a>Welcome Talk (Thursday)

**Welcome, and History and Growth of UK-RSE.**<br/>
Robert Haines and Simon Hettrick, University of Manchester, University of Southampton<br/>

A welcome to the conference, and a background and history of UK-RSE.

### <a name="K1"></a>Keynote Talk 1

**Keynote: Engineering the Future: Research Software Engineering at Microsoft**<br/>
Matthew Johnson, Leader of Agile Projects Team, Microsoft Research, Cambridge<br/>

For twenty five years, Microsoft Research has been one of the premier computer science research institutions in the world, and a large part of its continued success has been due to the crucial role research software engineers have played throughout its history. In this talk, I will highlight several projects from our past and present as viewed through the lens of the research software engineers that made them a reality.

### <a name="M1"></a>Main Talk 1

<a href="https://drive.google.com/open?id=1J4wO3HoC_joszUwdSmTID-YRm1eztDbq0TLv-Fa98nk">Not everyone can use git: Research Software Engineers’ recommendations for scientist-centred software support (and what researchers think of them).</a><br/>
Caroline Jay, Rawan Sanyour, Robert Haines, University of Manchester<br/>

Research Software Engineers (RSEs) are at the coalface of ensuring that computational science is accurate, reliable and reproducible, and their views on making progress in this domain are therefore particularly valuable. This is not always recognized by the scientific community, however: work examining the challenge of developing research software tends to focus on the views of scientists, and RSEs' voices are rarely found in the evidence base. 
 
We report the results of a project that brings together researchers and RSEs, to determine how to help scientists publish their code. We interview scientists to identify challenges, and we interview RSEs to determine how to overcome them. We formalize the results into a set of recommendations, and evaluate them in a survey completed by 64 computational scientists.
 
The survey shows that improving tool GUIs, linking internal repositories to external ones, and training in version control would all aid scientists in publishing reliable code. It also demonstrates that RSEs' views are valued by researchers: every recommendation received strong support. We conclude that RSEs can play a crucial role in scientific software policy, and their expertise should be officially recognized.

<hr/>
<hr/>

### <a name="W2"></a>Welcome Talk (Friday)

**Welcome to Friday.**<br/>
Robert Haines, University of Manchester<br/>

### <a name="K2"></a>Keynote Talk 2

**Keynote: Digital Data, Methods and Expertise: unsettling the boundaries in the 21st Century**<br/>
Susan Halford, School of Social Sciences, University of Southampton<br/>

<hr/>
<hr/>

### <a name="T1.1"></a>Talk 1.1

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhd0hnSFN6X2JoN3M">InterMine: Best Practices for Open Source Software</a><br/>
Daniela Butano, Department of Genetics, University of Cambridge<br/>

InterMine is an open source data warehouse built specifically for the integration and analysis of complex biological data. Developed by the Micklem lab at the University of Cambridge, InterMine enables the creation of biological databases accessed by sophisticated web query tools. Parsers are provided for integrating data from common biological data sources and formats, and there is a framework for adding your own data. InterMine includes an attractive, user-friendly web interface that works 'out of the box' and can be easily customised for your specific needs, as well as a powerful, scriptable web-service API to allow programmatic access to your data.
 
InterMine has enabled data sharing and analysis on the web for biologists since 2002. We'd like to share our story and what we've learned developing open source software for scientists over the years. Why did we choose open source? What does 'open' even mean? From GitHub to building communities to open APIs, being 'open' has proven a successful strategy for InterMine. We'll share what we've found to be best practices for designing, writing and maintaining open source software for science.

### <a name="T1.2"></a>Talk 1.2

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhUzVwODVVRDUxbzg">The Research Hub: Rethinking the Delivery of Institutional Research Services</a><br/>
Richard Hosking, Centre for eResearch, University of Auckland, NZ<br/>

At our institution like many others, computational services available to researchers are numerous, and provided from all corners of the university, such as the Library, central IT, and Faculties. But there is often a disconnect between the culture and practices of institutional service providers, and the research communities. Services are viewed independently, and are not seen as interconnected pieces in the research process. We identify this as a barrier to the sustainable development of novel research software and of the research services themselves. We discuss how our experience, as a service provider (HPC, VM, and Data) and as software developers embedded within research groups, has lead us re-envision how research services can be coordinated. We present our new Research Hub, our methodologies and reflections. We offer a novel approach to organize services around the research lifecycle, and touch on the clash of curiosity driven workflows with the more formal processes often required to deliver reliable services. We open-source our code and methodology to aid other institutions whilst also prompting a shared conversation around the sustainable management of software projects and institutional research services.


### <a name="T1.3"></a>Talk 1.3

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhZFJPZ1dhSW1IRkk">Using task-based parallelism to accelerate rational drug design</a><br/>
Christopher Woods, University of Bristol<br>

Adapting software for the massively multicore future forces researchers to look beyond traditional parallelisation strategies. Task based parallelism provides an intuitively clear abstraction. Researchers can easily conceptualise a computer program as being a collection of related tasks that will be solved by a team. This is a small step from the older view of a program as a series of instructions that are executed one after another. I will show how task based programming using threading building blocks has been used to parallelise the program LigandSwap. Ligandswap is used for predicting binding affinities of molecules to proteins. The program is divided into four levels of nested tasks, with compute resources dynamically allocated to those tasks throughout the calculation. Despite this complexity, the actual programming is very clear, with the nesting and connection of tasks being expressed cleanly within the program. This clarity is very important, as research software is developed by scientists. It is easy to learn how to write and test efficient task-based parallel code. I believe that task based parallelism provides a simple abstraction that will enable research software to adapt to a massively multicore future.



### <a name="T1.4"></a>Talk 1.4

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhMGNKRHFnWkU4Mm8">Analysing World Events Using the GDELT dataset and Google BigQuery</a><br/>
Ali Niknejad, Centre for Transport Studies, Imperial College London<br/>

The Global Database of Events, Language and Tone (GDELT) aims at capturing world events by monitoring the global news continuously, analysing the text and identifying the involved people, organizations, locations, themes, and, even the tone and emotions of the articles. Due to its global and near real-time coverage and inclusion of many news publishers in over 100 languages, it can provide an insight into the frequency and impact of social, economic and political incidents across the world. As an example, it is possible to filter strikes or armed conflicts in different locations, or, to determine the relationships between organizations and people. As the dataset is quite large, big data platforms such as Google BigQuery are ideal to carry out the analysis. BigQuery is an Infrastructure as a Service (IaaS) with a familiar SQL based language for querying the data, allowing for conveniently joining various data sources. We will demonstrate the application of BigQuery on the GDELT data with a few examples, including the measurement of the probability of strikes in international ports.


### <a name="T1.5"></a>Talk 1.5

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhNU04cER3blVYZDg">PIsCO: A Performance Indicators Framework for Software Metrics</a><br/>
Haydee Artaza Alvarez, The Genome Analysis Centre<br/>

The need for measuring the impact of software has never been so pressing. With shrinking budgets, greater competition for resources and an increasing need for transparency in the return for their investments, funders require ever more precise ways to track the impact of any software they spend money on. The problem with tracking the impact for biological resources is that no single metric can describe it accurately. In addition, even when the same metric is used, slightly different ways of calculating it may provide very different, even spurious, representations of impact for different resources. We thus propose PIsCO, a metrics-agnostic framework that provides a centralised resource where users can share descriptions of metrics for the community and that other users can adopt freely. PIsCO is able to collect metrics and present them in a visual way to allow their easy interpretation. The main advantage of using PIsCO is that metric definitions can be adopted by third parties so that they be benchmarked. PIsCO is still work in progress and we are currently applying it to a number of well recognised bioinformatics software tools to understand their impact.


<hr/>
<hr/>

### <a name="T2.1"></a>Talk 2.1

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhb0x0VWx3bWhXY1E">The Grackle project: turning a research code into a software package</a><br/>
Britton Smith, University of Edinburgh<br/>

I will present the Grackle project: a library for chemistry and cooling in astrophysical simulations. As a library, Grackle provides functionality needed by almost all astrophysical simulation codes with an API that is easy to implement. As an open-source project, Grackle provides a resource to the astronomical community where new models and data can be easily shared. I will discuss some of the key features of Grackle, such as its primary functions and Python interface, as well as how research software engineers can grow a project like this from a piece of single-use research code into a package with community development, user support, documentation, and testing.

### <a name="T2.2"></a>Talk 2.2

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhQ0VfXzRsWVRPV2M">Building Re-Useable Research Software at a National Level: A Canadian Perspective</a><br/>
Scott Henwood, CANARIE, Canada’s National Research and Education Network<br/>

Through its Research Software program, CANARIE, the national backbone of Canadaâ€™s Research and Education Network, has been funding the development of custom software to support scientific research for almost a decade. 
 
Scott will discuss the program's evolution, focusing on the critical role community-building has played in CANARIE's goal of enabling as many researchers as possible to use software tools to complete their research. 
 
Starting with the inception of the program, which brought researchers and Research Software Engineers (RSEs) together to share best practices on using cyber infrastructure in research, Scott will describe efforts to improve software development efficiency through component re-use and pre-proposal collaboration, and summarize CANARIE's latest initiative to encourage re-use at the research platform/science gateway level.

### <a name="T2.3"></a>Talk 2.3

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhcmI4TjR0em1jUzQ">Building LLAMA: A highly parallel web application for drug development</a><br/>
Chris Empson, School of Chemistry, University of Leeds<br/>

LLAMA (Lead-Likeness and Molecular Analysis) is a web application that helps drug discovery scientists to decide whether their 'lead' molecules may be a good starting point for a new drug. 'Lead' molecules are those that exhibit some interesting biological activity but require enhancement to make them more efficacious, selective or safer before clinical trials can be considered. The drug development process has a high attrition rate and predicting potential problems before they arise could greatly reduce the financial burden of bringing new drugs to market. The LLAMA software simulates the drug development process by performing virtual chemical reactions on the â€˜leadâ€™ molecule and visualising the chemical properties of the products. This valuable data can highlight many potential issues with a 'lead' molecule. Launched in September 2015, LLAMA has been well received and now has over 200 users.

The computational requirements are significant, so LLAMA has a highly parallel architecture based on the ZeroMQ message-passing library. This architecture enables the system to scale with few changes to the code. This talk will discuss the design rationale, implementation details and future ambitions of the LLAMA software.


### <a name="T2.4"></a>Talk 2.4

<a href="https://drive.google.com/open?id=1flBWk5qWB_QrEKR312bq6eb3iXkhE9VvrMthAubsQJ4">Layering for longevity: lessons from 3 decades of fusion data management</a><br/>
Jonathan Hollocombe, Alex Meakins, Shaun de Witt, UKAEA, Culham Centre for Fusion Energy<br/>

Long term stewardship of data requires active archive management, such as plans to evolve systems with changing technology. CCFE manages data from over three decades of nuclear fusion experiments. This talk will outline how a layered system that hides the underlying data format allows for the evolution of the technologies with minimal impact on users.
 
Large amounts of scientific data is stored in different formats and on different machines; sometimes backed up, sometimes on local storage. By providing unified data access abstractions we can hide away the problems of legacy file formats and provide a single method for users to store and retrieve this data. When all data access is through this single API it becomes possible to automate various beneficial practices such as versioning, provenance tracking and access control
 
The talk will cover the motivations and benefits of such abstracted data access and cover the existing solutions that have been created at CCFE over the last 30+ years and what they can teach us. It will then highlight the ongoing work to provide a modern solution, including our data pilot for the Horizon 2020 EUDAT project.

### <a name="T2.5"></a>Talk 2.5

<a href="https://drive.google.com/open?id=0BxBBX2agSwZheDZvUDdDeEVMMWs">GeosMeta: a service for researchers to hold metadata and provenance</a><br/>
Mike Mineter, School of GeoSciences, University of Edinburgh<br/>

In our role of supporting researchers as they need to manage and process research data, the lack of appropriate metadata tools seems a serious obstacle. We are prototyping a document-oriented web service, using MongoDB, to permit researchers to hold metadata or data, expressed as a python dictionary. An initial use case recognised that many of our researchers develop multiple scripts to process data, with processing steps being improvised ad-hoc (not in a formalised workflow). Instrumenting those scripts allows GeosMeta to hold the information associated with a particular "activity" that takes inputs, executes a script, and generates outputs. This permits us to answer questions like "How was this file made?", "Where was this script used?"

The combination of the flexibility of a keyword-value document and some server-side functionality for reserved keywords ("input_files", "output_files") is seeking a sweet spot in which many researchers can find functionality to help them manage data and metadata especially during their compute-oriented research.

We will review progress and the issues arising as we deploy GeosMeta.

<hr/>
<hr/>


### <a name="T3.1"></a>Talk 3.1

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhUmZUYTNyeDY5Yzg">Experiences of bootstrapping a Commercial Research team</a><br/>
Joanna Jordan, Catherine Barnaby, Bath Institute for Mathematical Innovation (IMI)<br/>

Very often, new external engagements or research projects can be facilitated by short term, proof-of-concept projects, typically lasting a few days to a few months. Real-world problems are frequently multi-faceted, and require an interdisciplinary approach. 
 
Unique to Bath, IMI has built a team of experienced mathematical and statistical modellers "Commercial Research Associates" (CRAs) analogous to RSEs who work on short-to-medium term projects with the intellectual support of Bath academics from different departments across campus. 

In this talk, we'll share our personal experience of some of the challenges and opportunities involved in this new way of working, as well as giving a flavour of the projects we've been involved in to date.




### <a name="T3.2"></a>Talk 3.2

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhd0RuNE5uRkd6bHc">Scaling up the software development process, a case study highlighting the complexities of large team software development.</a><br/>
Mark Basham, Diamond Light Source<br/>

"Diamond Light Source is the UK's National Synchrotron Facility and as such provides access to world class experimental services for UK and international researchers. As a facility that focuses on providing a good user experience to our varied visitors, Diamond invests heavily in software infrastructure and staff. Over 100 members of the 500 strong workforce consider software development as their primary role. These staff work on a significant number of different software packages, providing support for installation and configuration, maintenance and bug fixing, as well as additional research and development of software when required.
 
This talk focuses on one of the software projects undertaken to unify and improve the user experience of several common experiments. The 'mapping project' is a large 2 year, multi group project targeting the collection and processing of mapping experiments. It is divided into several work packages, ranging from teams of 1 to teams of 6 in size, with varying levels of time commitment to the project. The talk aims to explore the project as a case study, highlighting the experiences of the project team, the methodologies employed, their outcomes, and the lessons learnt from the experience."

 
### <a name="T3.3"></a>Talk 3.3

**Beyond cron and bash - Event-driven automation for the sequencing core facility**<br/>
Johan Dahlberg, Department of Medical Sciences, Uppsala University<br/>

Science is becoming industrialized. This has been especially true in genomics where technology advancements in massive parallel sequencing has underpinned hyper-exponential growth in the field. Handling the data produced by these experiments can be a daunting task, and is one typically handled by a sequencing core facility. The current norm in this space is one facility - one solution. This creates a situation where sharing components is difficult - something we address with the Arteria project.
 
The Arteria project provides components to automate analysis and data-management tasks at a sequencing core-facility. It leverages a micro-service based architecture together with the StackStorm platform to create an event-driven automation system, which is both flexible and scalable. 
 
We will show how we model our process into a workflow and make sure that it fires at the right time using a sensor approach. We will present the underlying ideas allowing the same concept to be extended into other domains, and explain how we transitioned to Arteria while still maintaining legacy systems.
 
Arteria is MIT-licensed and we are looking for collaborators to join us, see https://arteria-project.github.io/ for more information.

### <a name="T3.4"></a>Talk 3.4

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhUy1PWnhNN3V3Ym8">Reproducible Research software environments using Docker</a><br/>
Mark Fernandes, Institute of Food Research<br/>

Modern software applications can have complex infrastructure requirements ranging from installation of supporting libraries to specific versions of an OS. This can work against a key goal of publishing research software â€“ the ability to use it, along with the published data, to reproduce results and conclusions published in journals.
 
In this talk we explore a technology (Docker) that can help deliver to the user a software environment mirroring (as much as possible) that used by the author. Correct versions of libraries, configuration settings, web & database servers can be created without corrupting the users existing operating system as they are installed in isolated containers.
 
Docker container development can be performed either locally on a Linux server or using public development servers e.g. GitHub & Docker Hub and publication DOIs generated e.g. with Zenodo. The public Docker hub provides a searchable archive. New containers can be developed by building layers upon existing ones.
 
All this is delivered to their desktop without skills & infrastructure e.g. Linux installation and administration. We contend that Docker also delivers advantages for software maintenance updates over other technologies e.g. Virtual machines.


### <a name="T3.5"></a>Talk 3.5

**UK-RSE Networking and Discussion**<br/>
Simon Hettrick, University of Southampton / Software Sustainablilty Institute<br/>

The Whitworth room will be available for networking and general RSE-related discussion. We will provide a few suggested topics to get conversation flowing but feel free to use this session to meet people, continue a discussion you started in a coffee break or get a small group together to discuss a common interest.

<hr/>
<hr/>

### <a name="T4.1"></a>Talk 4.1

<a href="https://drive.google.com/open?id=0BxBBX2agSwZha25pSzM2ZzBKR1k">Gender differences in research software: a UK survey</a><br/>
Athina Frantzana, Edinburgh Parallel Computing Centre (EPCC)<br/>

In 2014, the Software Sustainability Institute (SSI) ran a survey of researchers at 15 Russell Group universities and collected demographic data and evidence of research software use, development and training. Initial analysis by SSI found that although there was no difference in the percentage of men and women using software, 70% of the male researchers developed software compared to only 30% of the female researchers. This is perhaps not surprising, when the survey also showed that 63% of the male researchers have had some form of training in software development compared to only 39% of women. In this paper, we present further analysis of this survey data in terms of gender. Our results indicate that the lack of women in the software community is more serious than is currently recognised. By correlating the gender of the respondents with additional questions we found, for example, that women are not only less likely to have received training, but even when they have been trained, they still do not go on to develop software as often as men with training. This work is a first step to address the gender differences in the software community and, hopefully it will provide useful material for further research.

### <a name="T4.2"></a>Talk 4.2

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhMzlTZjZMbDdibFk">Navigating the Met Office Unified Model Development Process: The Hoops and Hurdles of Software Rigour</a><br/>
Stuart Whitehouse, Met Office<br/>

The Met Office's Unified Model is a large scientific code used for weather and climate forecasting intended for use on some of the UK's largest supercomputers. It has over one hundred active developers who include both scientists and software engineers located across the world, and is used for research purposes as well as for providing operational weather forecasting by a number of national weather services around the world.
 
Quality control of scientific software can be a challenge; ensuring that code is correct without inhibiting scientific development requires a flexible but comprehensive change control process. The process for changing the Unified Model has evolved gradually over a number of years, and these changes have resulted in a more robust code whilst still enabling scientists to contribute code improvements easily. 
 
This talk will cover the process we are using at the Met Office, including testing, reviewing, and documentation and discuss the reasoning behind those processes. We will also show how those changes have reduced the number of bugs in the code over time whilst not inhibiting code development.

### <a name="T4.3"></a>Talk 4.3

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhaUJwREx5R3U4d3M">The road to software development in the reproducible scientific research context</a><br/>
Brian Jimenez-Garcia, Barcelona Supercomputing Center<br/>

Reproducibility and repeatability of the experiments in published research is required in order to fulfill peer review, replicate research and be able to build upon another's work. Computational resources and programs used for research are often not required by publishers or the source code is encapsulated in a binary for distribution, with possible consequences on the capability of results to be reproduced,. This is not the unique problem when dealing with software reproducibility as many other problems as hardware, operating system or libraries differences can arise producing numerical unstable results. Data interchangeability is another important issue when ignorance of existing standards could affect the interpretation and the analysis.

Here in this work we review many of the problems related with scientific computing development and a set of good practices in order to minimize the impact concerning research reproducibility.

### <a name="T4.4"></a>Talk 4.4

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhcEVHb2p3UmF0Z0E">Orchestration and Workflows in eScience: Problems, Standards, and Solutions</a><br/>
Niels Drost, Netherlands eScience Center<br/>

The Netherlands eScience Center works in partnership with scientists from many different fields, from humanities to high energy physics. This gives us a unique overview of the problems in these fields. One common problem we see is the need for compute power, often for relatively independent tasks. In this talk we will give an overview of the requirements for running these tasks: a surprisingly short list. This is especially surprising as the list of software created to solve these problems is sheer endless, leading to a lot of duplicated effort.
 
Our approach is to re-use and contribute to existing solutions as much as possible, and above all else use standards whenever possible. Software changes quickly, standards hopefully last longer. I will discuss some of the (emerging) standards we use, including the Common Workflow Language (CWL) and Basic Model Interface (BMI) from the BioInformatics and Geosciences communities respectively. Using examples from projects, I will also talk about software we use.
 
We hope that the RSE community can come together to exchange knowledge on this topic: hopefully leading to a better overview standards related to workflows and orchestration, and more usage of some of the great software out there.



### <a name="T5.1"></a>Talk 5.1

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhcV9YTFl6VzdqZmM">Taming your clients, or: Defining and managing requirements in an academic research context.</a><br/>
Harald Störrle, Technical University of Denmark<br/>

Effective and pragmatic Requirements Engineering (RE) is a key success factor of software development projects in general; projects in academic settings are no exception. In fact, development of software for research purposes presents a specific and unique set of challenges that demands a bespoke suite of techniques and tools.
 
Developing software in scientific research often exhibits these characteristics:
- very high degree of unknown unknowns: finding out about the requirements is an essential part of the journey;
- diverse stakeholders with little affinity to software, but strong and diverging opinions on priorities and limited availability;
- long-lasting development on a shoestring budget, but with highly qualified personnel;
- involvement of substantial numbers of junior subject matter experts (=students), that are acting as programmers yet lack SE training.
 
In this talk, we present the RE techniques and tools that we use at DTU's Compute Software Group. Our solution has evolved over the course of many software development projects at DTU since 2009. It strikes a pragmatic balance between classic SE techniques, and lightweight, open-source tool support for defining and managing requirements in an academic context.

### <a name="T5.2"></a>Talk 5.2

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhVmVjTC1QeVhHSWs">Why is persistently identifying your software a good idea?</a><br/>
Catherine Jones, STFC<br/>

Research software underpins the academic process. There are many reasons why giving a unique, external persistent identifier for significant versions is a good thing; but for effective identification or reuse the metadata associated with the identifier needs to be fit for purpose. Software is a living and evolving object and so it can be difficult to precisely identify which version is required. If working in an academic environement it can be difficult to give credit for software if it is not clear what should be used to identify the software concerned. 

The Software Reuse, Repurposing and Reproducibility project considered what metadata was needed for effective persistent identifcation and discovery, uing DataCite DOIs as an example. This talk will discuss the issues around software identification: the what & how and outline specific metadata concerns.

### <a name="T5.3"></a>Talk 5.3

<a href="https://drive.google.com/open?id=0BxBBX2agSwZhOXRZRjEtbTltME0">Modern Fortran in Research Software Engineering**<br/>
Ian Bush, University of Oxford</a><br/>

Fortran is the dominant programming language of computational science and engineering, accounting for over 70% of CPU cycles on ARCHER, the UK national supercomputing service (based on XALT accounting). Recent surveys have shown that a significant percentage of the academic software engineering community are still using the Fortran 77 standard, and that Fortran 90 is the most used standard. Adoption of the Fortran 2003 and 2008 standards in academia is still lagging behind. These newer standards include features such as object oriented programming, floating point exception handling, interoperability with C, CoArray for distributed memory parallelism and submodules. Such modern programming language features aid better software engineering for scientific codes, and so increases those codes robustness and sustainability. Further as the listed features are part of the Fortran standard, this robustness and sustainability will be portable across the large number of platforms that are available to the Fortran programmer today, including compilers from GNU, Intel, Cray, IBM, and NAG. In this talk we shall introduce these newer standards and give real, practical examples as to how their use aids the RSE in his or her work.

### <a name="T5.4"></a>Talk 5.4

<a href="https://drive.google.com/open?id=1TcoMFeqMPcVBjZ8827GtPFsbhdNGVIxC4Y2fS_Irk_s">The future of research software development at Newcastle University</a><br/>
Mark Turner, Newcastle University<br/>

Newcastle University's Digital Institute has been championing the importance of quality software for cross-disciplinary research since its creation 8 years ago. The number of research software engineers has grown steadily over time and has become a key role within the group. The Digital Institute's primary aim is to transform research across the University through the design and use of innovative digital technologies. The Digital Institute was recently awarded £30m to build a new National Institute for Smart Data Innovation.
 
 Firstly this talk will outline the role of Research Software Engineer in the Digital Institute, the types of projects encountered and the software development challenges they present. Secondly, highlight key projects in the history of the group and the role they played in developing current best practices. Finally discussing the vision for the future with the new National Institute for Smart Data Innovation.


### <a name="W3"></a>Wrap-up talk

**Conference wrap-up talk and feedback.**<br/>
Robert Haines, University of Manchester<br/>

This session will provide a chance to wrap-up the conference, and for you to give us feedback on how the event has run. This will help us as we start planning for the Second Annual Conference of Research Software Engineers.

<br/>
<br/>

