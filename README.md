# odin-todo-list

Initial ideal for this project.

1.User can navigate between all projects that he is appended to
2.Inside project there are 3 tabs. Todo, doing and done.
3.It's possible to create new project, update them, remove
4.Ability to move todo's between projects

Project properties:
-Name
-{todo}
-current state e.g.("7/12 completed" or "5 to complete")

Todo's properties:
-Title DONE
-description DONE
-creation date DONE
-deadline date DONE
-priority (low, moderate, high) DONE

App stores Projects, Todo's and users as objects.
All of them can be created with factories.

A WIEC KAZDA STRUKTURA POTRZEBUJE UI?
w UI importujemy functionfactory i pushujemy wszystkie 
wyprodukowane obiekty do jednej array.
importujemy również do UI wszsystkie funkcje zarządzajace np remove, add, change itp