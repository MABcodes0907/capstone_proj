
function Contact() {
    function sendMessage() {
        const userInput = document.getElementById('userInput').value;
        if (userInput.trim() !== "") {
            const chatBody = document.querySelector('.chat-body');
            const userMessage = document.createElement('div');
            userMessage.classList.add('message');
            userMessage.textContent = userInput;
            chatBody.appendChild(userMessage);
            document.getElementById('userInput').value = '';
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    }
    
  return (
    <div className="content">
        <div className="nav-text">
            <svg width={10} height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width={10} height="100%" x="o" y={0} rx={0} ry={0} fill="aqua" />
            </svg>
            <div className="text1">CONTACT</div>
        </div>
        <div className="chatbot">
            <div className="chat-header">
                <h2>Megay Beach Resort Chatbot</h2>
            </div>
            <div class="chat-body">
                <div class="message bot-message">
                    Welcome to Megay Beach Resort! Please note that this is an automated response. For further inquiries, visit our Facebook page: <a href="https://www.facebook.com/megaybeachresort?mibextid=ZbWKwL" target="_blank">Megay Beach Resort</a>. 
                    or contact us on:
                    Mobile: +639123456789 
                    Email: MegayBeachResort@gmail.com
                </div>
            </div>
            <div class="chat-footer">
                <input type="text" id="userInput" placeholder="Type a message..."/>
                <button onclick={sendMessage}>Send</button>
            </div>
        </div>
    </div>
  );
}

export default Contact;
