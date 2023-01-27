const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const checkIcon = document.querySelector("#check-icon");
const xIcon = document.querySelector("#x-icon");
const button = document.querySelector(".btn");

var i = 0;


button.addEventListener('click', function () {
    if (container3.style.display == "none") {
        container3.style.display = "block";
    }
    else {
        container3.style.display = "block";
    }

})


xIcon.addEventListener("click", function () {
    if (container3.style.display == "block") {
        container3.style.display = "none";
    }
    else {
        container3.style.display = "none";
    }
})


checkIcon.addEventListener("click", function () {
    const note = document.querySelector('#note').value;
    const node1 = document.createElement("div");
    const node2 = document.createElement("h1");

    node1.appendChild(node2);
    node2.innerHTML = note;

    node2.setAttribute("style", "width:250px;height:250px;font-size:26px;padding:25px;margin-top:10px;overflow:hidden;box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)");
    node2.style.margin = margin();
    node2.style.background = color();
    node2.style.transform = rotate();

    container2.insertAdjacentElement("beforeend", node1);

    node1.addEventListener("mouseenter", function () {
        node1.style.transform = "scale(1.1)";
        // container3.style.display = "none";
      
    })
    node1.addEventListener("mouseleave", function () {
        node1.style.transform = "scale(1)";
        // container3.style.display = "block";

    })

    node1.addEventListener("dblclick", function () {
        node1.remove();
    })

    document.querySelector('#note').value = " ";
})

function margin() {
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    return random_margin[Math.floor(Math.random() * random_margin.length)];

}

function rotate() {
    var random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];
    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
    var random_color = ["#FF6243", "#03c1ED", "#50DBB4", "#EDBF69", "#E5D68A", "#CAD5E2", "#F7CD2E"];

    if (i > random_color.length - 1) {
        i = 0;
    }
    return random_color[i++];

}