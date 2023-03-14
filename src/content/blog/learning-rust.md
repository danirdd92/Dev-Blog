---
title: 'Learning The Rust Programming Language: Part I'
description: "Documenting my journey to learn Rust"
author: 'Daniel Rashba'
tags: 'Rust'
pubDate: 'March 14 2023'
heroImage: '/owl.webp'
---

I'm excited to share our journey as a group of developers from J4J community who have embarked on a mission to learn Rust programming language.
Rust is a modern system programming language that has been gaining popularity in recent years due to its strong emphasis on safety, performance, and concurrency.
We've chosen to follow the Rust Book from Rust's website, which is an excellent resource for learning Rust from scratch.
In this blog post series, I'll be sharing our progress and sum up everything we've learned so far.


# Rust Summary

  ## Naming Conventions
  
|Item| Convention |
|--|--|
| Source files       | snake_case.rs |
| Project names      | snake_case |
| Item	             |   Convention |
| Types	             |   UpperCamelCase |
| Traits	         |   UpperCamelCase |
| Enum variants	     |   UpperCamelCase |
| Functions	         |   snake_case |
| Methods	         |   snake_case |
| Macros	         |   snake_case! |
| Local variables	 |   snake_case |
| Statics	         |   SCREAMING_SNAKE_CASE |
| Constants	         |   SCREAMING_SNAKE_CASE |


## Cargo

  

Cargo handles many tasks for Rust projects, such as building code, downloading dependencies, and building those dependencies. 

Rust projects that don't have dependencies can be built with only the part of Cargo that handles building code.

Cargo can be used to create a new project using the ``cargo new`` command, which generates a directory and files for the project.
```zsh
cargo new <project_name>
```

The generated ``Cargo.toml`` file is in the TOML format, which is Cargo's configuration format.
```toml
[package]
name  =  "project_name"
version  =  "0.1.0"
edition  =  "2021"

[dependencies]
dep_name_plus_semver =  "0.8.5"
```
The ``src`` directory is where Cargo expects source files to live, while the top-level project directory is for non-code files. Everything outside of src are configurations and assets to the program.

Building and running a Rust project with Cargo involves using the ``cargo build`` and ``cargo run`` commands, respectively. The output binary file is located in the "target" directory.

``cargo run`` builds a development build and runs it at the same time. To make a production build use ``cargo build --release``

You can generate docs based on your source code and dependencies with ``cargo doc --open``


## Let's make a guessing game

```rust
use rand::Rng; 
use std::cmp::Ordering;  
use std::io; 

fn main() {
    println!("Guess the number!"); 

    let secret_number = rand::thread_rng().gen_range(1..=100); 

    loop {
        println!("Please input your guess.");

        let mut guess = String::new(); 

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You've guessed {guess}");

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}
```

#### Imports
```rust
use  std::io;
use  rand::Rng;
use  std::cmp::Ordering;
``` 
The program starts with importing the input/output library, `std::io`, which provides useful features for accepting user input. Rust brings a set of items defined in the standard library into the scope of every program, called the `prelude`. If a type you want to use isn't in the prelude, you have to bring that type into scope explicitly with a `use` statement.

`rand::Rng` is an import of something called a `trait`, appears to be similar to an interface. Although it is not used explicitly in the program, we must import it into scope for `rand` to work properly. 

`std::cmp::Ordering` is an import of an Enum.

#### Variables

```rust
let secret_number = rand::thread_rng().gen_range(1..=100);
// code code code...
let mut guess = String::new();

io::stdin()
    .read_line(&mut guess)
    .expect("Failed to read line");

let guess: u32 = match guess.trim().parse()
// code code code...

```

We declare variables with the `let` keyword. variables are immutable by default in Rust. In order to create mutable variables, we use `let mut`. 

Even though variables are immutable we can redeclare the same variable - this is called `shadowing`. We can use this when we want to make type conversions without having to come up with different variable names.

We can pass variables by reference using `&`, references are also immutiable, in order to mutate the value of the reference - use `&mut`

#### Macros

A macro is a special function that takes parameters and generates code based on the input during compile time. Macros are annotated with a bang `!`.

`println!()` is a macro that recieves a String as input and can use `{}` as placeholders to format variables like in many other languages.

#### Pattern Matching and the Result enum
We can use the `match` keywards to do pattern matching on enums/ ranges/ iterators etc...

We learned about the `Result` enum, That has two arms `Ok` and `Err`, functions like `parse()` returns a Result type that we handle using pattern matching. 


#### Loops

So far we've seen the `loop` keyword which loops indefinitely, we handle it's flow using `continue` and `break`.