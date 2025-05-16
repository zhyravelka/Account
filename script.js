async function initializeMessages() {
    try {
        const response = await fetch('./data/messages.json');
        const data = await response.json();
        
        const messagesContainer = document.querySelector('.messages_container');
        
        data.messages.forEach(messageData => {
            const message = new Message(messageData);
            messagesContainer.innerHTML += message.render();
        });
    } catch (error) {
        console.error('Error loading messages:', error);
    }
}

document.addEventListener('DOMContentLoaded', initializeMessages);

function handleResize() {
    const width = window.innerWidth;
    const body = document.body;
    
    if (width <= 768) {
        body.classList.add('tablet-view');
        body.classList.remove('desktop-view');
    } else {
        body.classList.add('desktop-view');
        body.classList.remove('tablet-view');
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);