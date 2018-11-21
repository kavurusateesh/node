// -------------------- Angular Application Process --------------//

Angular Futhures - 

1)Component 
2)Service
3)Directives
4)Pipes
5)Module

1)component --In Angular application we create the component to provide the UI. A component is a combination of html and tags. 

ng generate component componentname

2) Service -- IT is use to communicate with the server by making rest api calls

ng generete service servicename.

3) Directive -- It is use to Extend the HTML by creating our own attributs and tags.

ng generate directive directivename

4)Pipes --  It is use to configure Formating the data in the application.

exp - date, number, sort, search, etc

@pipe

class BrandPipe{  logic }

5)Module -- Module act as continer for all angular future.

like component,service,directive,pipes should register with the module
@ngModule()
class classname {}

ng generate module modulename



