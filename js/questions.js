//Question Array / passing the number, questions, options and answers
let questions = [
    {
        number: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        number: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        number: 3,
        question: "Which of the following is a JavaScript data type?",
        answer: "Boolean",
        options: [
            "Boolean",
            "Float",
            "Integer",
            "Character"
        ]
    },
    {
        number: 4,
        question: "Which symbol is used for single line comments in C# and JavaScript?",
        answer: "//",
        options: [
            "'<'!-- --'>'",
            "/* */",
            "#",
            "//"
        ]
    },
    {
        number: 5,
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        answer: "push()",
        options: [
            "add()",
            "append()",
            "push()",
            "insert()"
        ]
    },
    {
        number: 6,
        question: "Which keyword is used to define a variable in JavaScript?",
        answer: "var",
        options: [
            "int",
            "var",
            "let",
            "define"
        ]
    },
    {
        number: 7,
        question: "What does DOM stand for?",
        answer: "Document Object Model",
        options: [
            "Data Object Model",
            "Document Object Model",
            "Document Oriented Model",
            "Data Oriented Model"
        ]
    },
    {
        number: 8,
        question: "What is the correct syntax to output 'Hello World' in JavaScript?",
        answer: "console.log('Hello World')",
        options: [
            "print('Hello World')",
            "echo 'Hello World'",
            "console.log('Hello World')",
            "printf('Hello World')"
        ]
    },
    {
        number: 9,
        question: "Which method converts a JSON string into a JavaScript object?",
        answer: "JSON.parse()",
        options: [
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.parse()",
            "JSON.toObject()"
        ]
    },
    {
        number: 10,
        question: "Which of the following is the correct file extension for JavaScript files?",
        answer: ".js",
        options: [
            ".js",
            ".java",
            ".javascript",
            ".jv"
        ]
    },
    {
        number: 11,
        question: "Which of these is a value type in C#?",
        answer: "int",
        options: [
            "string",
            "object",
            "int",
            "delegate"
        ]
    },
    {
        number: 12,
        question: "Which keyword is used to define a method in C#?",
        answer: "void",
        options: [
            "function",
            "void",
            "define",
            "method"
        ]
    },
    {
        number: 13,
        question: "Which of the following is a correct way to declare an array in C#?",
        answer: "int[] numbers = new int[5];",
        options: [
            "int numbers = [5];",
            "int[] numbers = new int[5];",
            "array numbers = int(5);",
            "int numbers[] = 5;"
        ]
    },
    {
        number: 14,
        question: "What is the base class for all classes in C#?",
        answer: "Object",
        options: [
            "BaseClass",
            "Root",
            "Parent",
            "Object"
        ]
    },
    {
        number: 15,
        question: "Which of the following is used for error handling in C#?",
        answer: "try-catch",
        options: [
            "if-else",
            "try-catch",
            "for-while",
            "switch-case"
        ]
    },
    {
        number: 16,
        question: "Which of the following is an access modifier in C#?",
        answer: "public",
        options: [
            "public",
            "get",
            "set",
            "return"
        ]
    },
    {
        number: 17,
        question: "What is the purpose of the 'using' statement in C#?",
        answer: "To include namespaces",
        options: [
            "To declare variables",
            "To include namespaces",
            "To define classes",
            "To create loops"
        ]
    },
    {
        number: 18,
        question: "Which of the following is the entry point of a C# console application?",
        answer: "Main()",
        options: [
            "Start()",
            "Init()",
            "Main()",
            "Run()"
        ]
    },
    {
        number: 19,
        question: "What does MVC stand for in .NET MVC?",
        answer: "Model View Controller",
        options: [
            "Model Variable Controller",
            "Module View Configuration",
            "Model View Controller",
            "Module Variable Controller"
        ]
    },
    {
        number: 20,
        question: "Which file typically contains routing configuration in ASP.NET MVC?",
        answer: "RouteConfig.cs",
        options: [
            "AppConfig.cs",
            "WebConfig.cs",
            "RouteConfig.cs",
            "Startup.cs"
        ]
    },
    {
        number: 21,
        question: "Which method is used to return data as JSON in ASP.NET MVC?",
        answer: "Json()",
        options: [
            "ToJson()",
            "ReturnJson()",
            "Json()",
            "GetJson()"
        ]
    },
    {
        number: 22,
        question: "Which attribute is used to define a primary key in Entity Framework?",
        answer: "[Key]",
        options: [
            "[PrimaryKey]",
            "[MainKey]",
            "[Key]",
            "[Id]"
        ]
    },
    {
        number: 23,
        question: "Which of the following is a valid return type for an action method in ASP.NET MVC?",
        answer: "ActionResult",
        options: [
            "HttpResponse",
            "ActionResult",
            "ViewResult",
            "ResultSet"
        ]
    },
    {
        number: 24,
        question: "What is the default view engine in ASP.NET MVC?",
        answer: "Razor",
        options: [
            "Razor",
            "Blade",
            "Twig",
            "Mustache"
        ]
    },
    {
        number: 25,
        question: "Which method is used to redirect to another action in ASP.NET MVC?",
        answer: "RedirectToAction()",
        options: [
            "GoToAction()",
            "RedirectAction()",
            "RedirectToAction()",
            "NavigateToAction()"
        ]
    },
    {
        number: 26,
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        answer: "=",
        options: [
            "+",
            "-",
            "=",
            "*"
        ]
    },
    {
        number: 27,
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction()",
        options: [
            "function:myFunction()",
            "function = myFunction()",
            "function myFunction()",
            "create myFunction()"
        ]
    },
    {
        number: 28,
        question: "Which of the following is NOT a valid JavaScript loop?",
        answer: "repeat-while",
        options: [
            "for",
            "while",
            "do-while",
            "repeat-while"
        ]
    },
    {
        number: 29,
        question: "How do you write an IF statement in JavaScript?",
        answer: "if (i == 5)",
        options: [
            "if i == 5",
            "if (i == 5)",
            "if i = 5",
            "if (i === 5) then"
        ]
    },
    {
        number: 30,
        question: "Which method is used to remove the last element from an array in JavaScript?",
        answer: "pop()",
        options: [
            "remove()",
            "delete()",
            "pop()",
            "shift()"
        ]
    },
    {
        number: 31,
        question: "Which of the following is a loop structure in C#?",
        answer: "foreach",
        options: [
            "foreach",
            "repeat",
            "loop",
            "iterate"
        ]
    },
    {
        number: 32,
        question: "What is the correct syntax to create a class in C#?",
        answer: "public class MyClass",
        options: [
            "class MyClass",
            "public MyClass",
            "define class MyClass",
            "public class MyClass"
        ]
    },
    {
        number: 33,
        question: "Which of the following is used to handle exceptions in C#?",
        answer: "try-catch-finally",
        options: [
            "try-except-finally",
            "try-catch-finally",
            "try-else-finally",
            "try-then-finally"
        ]
    },
    {
        number: 34,
        question: "Which keyword is used to inherit a class in C#?",
        answer: " : ",
        options: [
            "inherit",
            "extends",
            " : ",
            "implements"
        ]
    },
    {
        number: 35,
        question: "Which of the following is a nullable type in C#?",
        answer: "int?",
        options: [
            "int?",
            "nullable int",
            "?int",
            "null int"
        ]
    },
    {
        number: 36,
        question: "Which of the following is a valid Razor syntax in ASP.NET MVC?",
        answer: "@model",
        options: [
            "model@",
            "@model",
            "#model",
            "model#"
        ]
    },
    {
        number: 37,
        question: "Which method is used to initialize data in a controller in ASP.NET MVC?",
        answer: "Initialize()",
        options: [
            "Init()",
            "Setup()",
            "Initialize()",
            "Configure()"
        ]
    },
    {
        number: 38,
        question: "Which of the following is a built-in filter in ASP.NET MVC?",
        answer: "Authorize",
        options: [
            "Authorize",
            "Authenticate",
            "Permission",
            "Validate"
        ]
    },
    {
        number: 39,
        question: "Which of the following is a routing component in ASP.NET MVC?",
        answer: "RouteTable",
        options: [
            "RouteMap",
            "RouteTable",
            "RouteConfig",
            "RouteList"
        ]
    },
    {
        number: 40,
        question: "Which of the following is a valid way to create a new ASP.NET MVC project?",
        answer: "Using Visual Studio",
        options: [
            "Using Visual Studio",
            "Using MS Word",
            "Using Notepad",
            "Using Excel"
        ]
    },
    {
        number: 41,
        question: "Which of the following is a valid method to render a view in ASP.NET MVC?",
        answer: "return View();",
        options: [
            "render View();",
            "return View();",
            "show View();",
            "display View();"
        ]
    },
    {
        number: 42,
        question: "Which of the following is a valid method for data annotation in ASP.NET MVC?",
        answer: "[Required]",
        options: [
            "[Mandatory]",
            "[Required]",
            "[Obligatory]",
            "[Necessary]"
        ]
    },
    {
        number: 43,
        question: "What is the correct syntax for creating a constructor in C#?",
        answer: "public MyClass() {}",
        options: [
            "constructor MyClass() {}",
            "public MyClass() {}",
            "MyClass.constructor() {}",
            "new MyClass() {}"
        ]
    },
    {
        number: 44,
        question: "Which method is used to close a database connection in C#?",
        answer: "Close()",
        options: [
            "Stop()",
            "End()",
            "Close()",
            "Terminate()"
        ]
    },
    {
        number: 45,
        question: "Which of the following is a valid data type in C#?",
        answer: "decimal",
        options: [
            "floatpoint",
            "decimal",
            "doublefloat",
            "money"
        ]
    },
    {
        number: 46,
        question: "Which of the following is a valid way to instantiate an object in C#?",
        answer: "new MyClass()",
        options: [
            "instantiate MyClass()",
            "create MyClass()",
            "new MyClass()",
            "MyClass.create()"
        ]
    },
    {
        number: 47,
        question: "Which method is used to commit a transaction in C#?",
        answer: "Commit()",
        options: [
            "EndTransaction()",
            "Commit()",
            "SaveTransaction()",
            "Apply()"
        ]
    },
    {
        number: 48,
        question: "Which of the following is used to declare a constant in C#?",
        answer: "const",
        options: [
            "constant",
            "final",
            "const",
            "immutable"
        ]
    },
    {
        number: 49,
        question: "Which keyword is used to define properties in C#?",
        answer: "get; set;",
        options: [
            "define; assign;",
            "get; set;",
            "fetch; assign;",
            "retrieve; set;"
        ]
    },
    {
        number: 50,
        question: "C# is also called?",
        answer: "C-sharp",
        options: [
            "C-sharp",
            "C hash",
            "C",
            "Sharp"
        ]
    }
];
