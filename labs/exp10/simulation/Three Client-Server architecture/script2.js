let database = [];
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const svgContainer = document.getElementById('svgContainer');
    const sourceNodes = document.querySelectorAll('.source-container .node');
    const destination = document.getElementById('destination');
    const destination2 = document.getElementById('destination2');
    const sendButton = document.getElementById('sendButton');
    const sendresponse = document.getElementById('sendresponse');
    const questionBox = document.getElementById('questionBox');
    const questionInput = document.getElementById('questionInput');
    const responseBox = document.getElementById('responseBox');
    const fetchEmail = document.getElementById('fetchEmail');
    const responseInput = document.getElementById('responseInput');
    const closeResponse = document.getElementById('closeResponse');
    const fetchBtn = document.getElementById('fetchBtn');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');
    const image4 = document.getElementById('image4');
    const image5 = document.getElementById('image5');
    const image6 = document.getElementById('image6');
    let requestSent = false;
function createLine(startNode, endNode) {
const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
svgContainer.appendChild(line);
const startRect = startNode.getBoundingClientRect();
const endRect = endNode.getBoundingClientRect();
const containerRect = container.getBoundingClientRect();
const startX = startRect.left - containerRect.left + startRect.width / 2;
const startY = startRect.top - containerRect.top + startRect.height / 2;
const endX = endRect.left - containerRect.left + endRect.width / 2;
const endY = endRect.top - containerRect.top + endRect.height / 2;
line.setAttribute('x1', startX);
line.setAttribute('y1', startY);
line.setAttribute('x2', endX);
line.setAttribute('y2', endY);
line.setAttribute('stroke', 'red');
line.setAttribute('stroke-width', 2);
}
function createPacket(startNode, endNode, callback) {
const packet = document.createElement('div');
packet.classList.add('packet');
container.appendChild(packet);
const startRect = startNode.getBoundingClientRect();
const endRect = endNode.getBoundingClientRect();
const containerRect = container.getBoundingClientRect();
const startX = startRect.left - containerRect.left + startRect.width / 2;
const startY = startRect.top - containerRect.top + startRect.height / 2;
const endX = endRect.left - containerRect.left + endRect.width / 2;
const endY = endRect.top - containerRect.top + endRect.height / 2;
const duration = 2000;
let startTime;
function animatePacket(time) {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentX = startX + (endX - startX) * progress;
    const currentY = startY + (endY - startY) * progress;
    packet.style.left = `${currentX}px`;
    packet.style.top = `${currentY}px`;
    if (progress < 1) {
        requestAnimationFrame(animatePacket);
    } else {
        packet.style.left = `${endX}px`;
        packet.style.top = `${endY}px`;
        if (callback) callback();
    }
}
 requestAnimationFrame(animatePacket);
}
function createTextDisplay(text, startNode, endNode) {
const display = document.createElement('div');
display.classList.add('text-display');
display.textContent = text;
container.appendChild(display);
const startRect = startNode.getBoundingClientRect();
const endRect = endNode.getBoundingClientRect();
const containerRect = container.getBoundingClientRect();
const startX = startRect.left - containerRect.left + startRect.width / 2;
const startY = startRect.top - containerRect.top + startRect.height / 2;
const endX = endRect.left - containerRect.left + endRect.width / 2;
const endY = endRect.top - containerRect.top + endRect.height / 2;
const midX = (startX + endX) / 2;
const midY = (startY + endY) / 2;
display.style.left = `${midX}px`;
display.style.top = `${midY}px`;
const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
display.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}
function startPacketsFromNode(node) {
createPacket(node, destination, () => {
    createPacket(destination, destination2);
});
image1.classList.remove('hidden');
image2.classList.remove('hidden');
image3.classList.remove('hidden');
// Hide response images initially
image4.classList.add('hidden');
image5.classList.add('hidden');
image6.classList.add('hidden');
}
function sendPacketsFromServer() {
const responseText = responseInput.value;
sourceNodes.forEach((node, index) => {
createLine(destination2, destination);
createTextDisplay('Sending response', destination, destination2);

setTimeout(() => {
createPacket(destination2, destination, () => {
createPacket(destination, node);
createTextDisplay('Sending response', node, destination);


});
}, index * 1000);
});
}
sendButton.addEventListener('click', () => {
questionBox.style.display = 'flex';
questionInput.focus();
});
function addDataToTable(name, email, message) {
const dataTableBody = document.getElementById('dataTableBody');
const row = document.createElement('tr');
row.innerHTML = `
<td>${name}</td>
<td>${email}</td>
<td>${message}</td>
`;
dataTableBody.appendChild(row);
}
questionInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const question = questionInput.value;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const responseData = {
                name: name,
                email: email,
                message: message
            };
            database.push(responseData);
            database.push({ name, email, message });

// Add data to the table
            addDataToTable(name, email, message);
            displayResponse('Data submitted successfully!');
            document.getElementById('questionInput').reset();
            requestSent = true;
            questionBox.style.display = 'none';
            sourceNodes.forEach((node, index) => {
                createLine(node, destination);
                createTextDisplay('Sending request', node, destination);
                setTimeout(() => {
                    startPacketsFromNode(node);
                    createTextDisplay('Sending request', destination, destination2);
                }, index * 100);
            });
            createLine(destination, destination2);

            // Show SVG lines and images
            image1.classList.remove('hidden');
            image2.classList.remove('hidden');
            image3.classList.remove('hidden');
        }
    });
// Define the displayResponse function
    function displayResponse(text) {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: text,
            timer: 700,
        });
    }
    
   
 
    sendresponse.addEventListener('click', () => {
        if (!requestSent) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Send the "Request" first.',
            });
            return;
        }
        
        responseBox.style.display = 'flex';
        const emailValue = fetchEmail.value;
        const responseData = database.find((data) => data.email === emailValue);
        if (responseData) {
            addDataToDisplay(responseData);
       
        } 
        
        fetchEmail.value = '';
        requestSent = false;
        if(requestSent = true) {
            sendresponse.disabled=true;
          }
        
       
        
    }
);
    
    

function addDataToDisplay(data) {
const displayContainer = document.getElementById('responseBox');
displayContainer.innerHTML = `
    <div class="data-item">
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <p>Message: ${data.message}</p>
    </div>
`;
displayContainer.style.display = 'flex';
}
fetchBtn.addEventListener('click', () => {
const email = fetchEmail.value;
const data = database.find((item) => item.email === email);
if (data) {
    addDataToDisplay(data);
    Swal.fire({
            title: "Request Processing!",
            html: "<b></b>",
            timer: 2200,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 200);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
           
        });
    displayResponse('data found for this email!');
    image1.classList.add('hidden');
        image2.classList.add('hidden');
        image3.classList.add('hidden');
      // Hide response images initially
       image4.classList.remove('hidden');
       image5.classList.remove('hidden');
       image6.classList.remove('hidden');
    sendPacketsFromServer();
    
} else {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No data found for this email!',
    });
}
});


const instructionsModal = document.getElementById('instructionsModal');
const instructionsBtn = document.getElementById('instructionsBtn');
const closeBtn = document.getElementById('closeBtn');
instructionsBtn.addEventListener('click', () => {
instructionsModal.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
instructionsModal.style.display = 'none';
});
});