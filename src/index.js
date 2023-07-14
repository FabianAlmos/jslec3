const hello = require("./js/hello.js")

import "./sass/main.scss"
import gopher from "./assets/go-gopher-dribbble.webp"
import { sayMyName } from "./mrwhite"

const gopherImg = document.getElementById("gopher")

gopherImg.addEventListener("click", () => hello.counter())

gopherImg.src = gopher

sayMyName()