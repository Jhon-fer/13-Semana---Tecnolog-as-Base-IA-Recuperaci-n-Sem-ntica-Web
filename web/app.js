// ============================================
// CHATBOT RAG - LÓGICA PRINCIPAL
// LangChain + ChromaDB + Gemini
// ============================================

// Configuración
const API_URL = "https://colab.research.google.com/drive/1zwCC7pkT-PCIIE1w169OHUn6jgW0QU4A?usp=sharing"; // ⚠️ CAMBIAR POR TU URL DE COLAB

// Elementos del DOM
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const clearButton = document.getElementById('clearChat');
const statusDot = document.getElementById('statusDot');
const statusText = document.getElementById('statusText');

// Estado
let isWaiting = false;
let messageId = 0;

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

// Enviar mensaje
async function sendMessage() {
    const message = messageInput.value.trim();
    
    if (!message || isWaiting) return;
    
    // Limpiar input y ajustar altura
    messageInput.value = '';
    messageInput.style.height = 'auto';
    
    // Agregar mensaje del usuario
    addMessage(message, 'user');
    
    // Mostrar loading
    isWaiting = true;
    sendButton.disabled = true;
    const loadingId = showTypingIndicator();
    
    try {
        const response = await fetch(`${API_URL}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pregunta: message })
        });
        
        const data = await response.json();
        
        removeTypingIndicator(loadingId);
        
        if (data.exito) {
            addMessage(data.respuesta, 'bot');
        } else {
            addMessage('❌ Error: ' + (data.error || 'No se pudo procesar la pregunta'), 'bot');
        }
    } catch (error) {
        removeTypingIndicator(loadingId);
        addMessage('❌ Error de conexión. Verifica que el servidor de Colab esté corriendo.', 'bot');
        updateConnectionStatus(false);
        console.error('Error:', error);
    } finally {
        isWaiting = false;
        sendButton.disabled = false;
        messageInput.focus();
    }
}

// Agregar mensaje al chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender === 'user' ? 'user-message' : 'bot-message'}`;
    messageDiv.id = `msg-${Date.now()}-${messageId++}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = sender === 'user' ? '👤' : '🤖';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const senderDiv = document.createElement('div');
    senderDiv.className = 'message-sender';
    senderDiv.textContent = sender === 'user' ? 'Tú' : 'Chatbot RAG';
    
    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.innerHTML = text.replace(/\n/g, '<br>');
    
    const timeDiv = document.createElement('div');
    timeDiv.className = 'message-time';
    timeDiv.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    contentDiv.appendChild(senderDiv);
    contentDiv.appendChild(textDiv);
    contentDiv.appendChild(timeDiv);
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);
    
    chatMessages.appendChild(messageDiv);
    
    // Scroll al final
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Mostrar indicador de escritura
function showTypingIndicator() {
    const id = `typing-${Date.now()}`;
    const loadingDiv = document.createElement('div');
    loadingDiv.id = id;
    loadingDiv.className = 'loading-message';
    loadingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="typing-indicator">
            <span></span><span></span><span></span>
        </div>
    `;
    chatMessages.appendChild(loadingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return id;
}

// Remover indicador de escritura
function removeTypingIndicator(id) {
    const element = document.getElementById(id);
    if (element) element.remove();
}

// Limpiar conversación
function clearChat() {
    // Mantener solo el primer mensaje de bienvenida
    const messages = chatMessages.querySelectorAll('.message');
    messages.forEach(msg => {
        if (!msg.querySelector('.message-text')?.innerHTML.includes('¡Hola!')) {
            msg.remove();
        }
    });
    
    // Opcional: Reiniciar contexto si es necesario
    addMessage('🧹 Conversación reiniciada. ¿En qué más puedo ayudarte?', 'bot');
}

// Actualizar estado de conexión
function updateConnectionStatus(online) {
    if (online) {
        statusDot.className = 'status-dot online';
        statusText.textContent = '✅ Conectado - Servidor activo';
        document.getElementById('status-langchain').innerHTML = '✅ Activo';
        document.getElementById('status-chromadb').innerHTML = '✅ Conectado';
    } else {
        statusDot.className = 'status-dot offline';
        statusText.textContent = '❌ Desconectado - Verifica Colab';
        document.getElementById('status-langchain').innerHTML = '❌ Sin conexión';
        document.getElementById('status-chromadb').innerHTML = '❌ Sin conexión';
    }
}

// Verificar conexión con el servidor
async function checkConnection() {
    try {
        const response = await fetch(`${API_URL}/health`);
        if (response.ok) {
            const data = await response.json();
            updateConnectionStatus(true);
            console.log('✅ Conectado a:', API_URL);
        } else {
            updateConnectionStatus(false);
        }
    } catch (error) {
        updateConnectionStatus(false);
        console.error('Error de conexión:', error);
    }
}

// Ajustar altura del textarea automáticamente
function autoResizeTextarea() {
    messageInput.style.height = 'auto';
    messageInput.style.height = Math.min(messageInput.scrollHeight, 120) + 'px';
}

// Manejar tecla Enter
function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

sendButton.addEventListener('click', sendMessage);
clearButton.addEventListener('click', clearChat);
messageInput.addEventListener('input', autoResizeTextarea);

// Verificar conexión periódicamente
checkConnection();
setInterval(checkConnection, 30000);

// Inicializar
messageInput.focus();
console.log('🚀 Chatbot RAG inicializado');
console.log('📡 API URL:', API_URL);