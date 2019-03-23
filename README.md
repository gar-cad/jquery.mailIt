# jquery.mailIt

A simple jquery plugin that displays e-mail addresses that are obfuscated in the source code.

### Prerequisites

jquery 2.0.1


### Set up

Install the plugin, and use the following source code as an example. Basic use (using the default syntax), more examples can be found in the demo folder.

##### HTML
```
    <span class="email1">anEmailAddress[at]domain.com</span>
    <span class="email1">anotherEmailAddress[at]domain[dot]com</span>
    <span class="email1">yetAnother<del>-REMOVE-THIS-</del>EmailAddress[at]domain[dot]com</span>
```

##### javascript
```
    <script src="http://code.jquery.com/jquery-2.0.1.min.js"></script>
    <script src="src/jquery.mailIt.min.js"></script>
    <script>
        $(function () {
            $('.email1').mailIt();
        });
    </script>
```

## Examples

View the examples in the demo folder. 

## Author

* **Gareth Cadwaladr** - *Initial work* - [gar-cad](https://github.com/gar-cad)

See also the list of [contributors](https://github.com/gar-cad/jquery.dataTree/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.MD) file for details