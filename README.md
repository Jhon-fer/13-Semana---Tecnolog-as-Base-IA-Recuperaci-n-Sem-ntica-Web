---

# 🤖 Chatbot Inteligente RAG - SENATI 2026

## 📝 Información del Proyecto

**Curso:** Tecnologías Base: IA + Recuperación Semántica + Web

**Trabajo:** Chatbot Inteligente con Documentos (LangChain + Colab + GitHub)

**Semana:** 13 - Ejercicio de Recuperación Semántica Avanzada

### 👥 Integrantes del Grupo

* 👤 **DANIEL EDUARDO RACUA RAMOS**
* 👤 **JHON FERNANDO GOMEZ QUISPE**

---

## 🚀 Descripción General

Este proyecto consiste en un **Chatbot RAG (Retrieval-Augmented Generation)** capaz de leer documentos digitales (PDF/TXT/DOCX) y responder preguntas específicas utilizando inteligencia artificial. Implementamos una arquitectura moderna que combina procesamiento de lenguaje natural con bases de datos vectoriales.

---

## 🛠️ Herramientas Obligatorias

| Herramienta | Logo | Uso Principal |
| --- | --- | --- |
| **Python** | 🐍 | Lenguaje de programación principal |
| **Google Colab** | 📒 | Entorno de desarrollo y pruebas de IA |
| **LangChain** | 🦜🔗 | Orquestación de la lógica del chatbot |
| **GitHub** | 🐙 | Control de versiones y almacenamiento |
| **ChromaDB / FAISS** | 🗄️ | Almacenamiento de embeddings (Base Vectorial) |
| **Flask / Gradio** | 🌐 | Servidor Backend y API del sistema |
| **Google Gemini** | ♊ | Modelo de Lenguaje (LLM) para respuestas |

---

## 🏗️ Arquitectura del Sistema

El flujo de información sigue la normativa obligatoria:

1. **Usuario** 👤: Realiza una consulta mediante la web.
2. **Frontend** 💻: Interfaz en HTML/JS que envía la petición.
3. **LangChain** 🧠: Motor que procesa la pregunta y busca en la base de datos.
4. **Vector Store** 🔍: Recupera el contexto semántico de los documentos.
5. **Modelo IA** 🤖: Genera la respuesta final basada en el contexto encontrado.

---

## 📂 Estructura del Proyecto

```text
chatbot-rag/
│
├── 📂 app/                # Lógica del servidor y Chatbot
│   ├── 📄 chatbot.py      # Lógica de LangChain
│   ├── 📄 embeddings.py   # Procesamiento de vectores
│   ├── 📄 vectorstore.py  # Conexión con ChromaDB/FAISS
│   └── 📄 main.py         # Punto de entrada (Flask)
│
├── 📂 data/               # Documentos de conocimiento
│   └── 📄 documento.pdf   # Base de datos documental
│
├── 📂 web/                # Interfaz de Usuario
│   ├── 📄 index.html      # Estructura Web
│   ├── 📄 app.js          # Lógica de conexión con API
│   └── 📄 styles.css      # Diseño visual
│
├── 📄 requirements.txt    # Dependencias del sistema
├── 📄 README.md           # Documentación técnica
└── 📄 notebook.ipynb      # Desarrollo inicial en Colab

```

---

## 📖 Conceptos Clave (Aporte Personal)

* **LangChain 🦜🔗:** Es el "cerebro" que conecta el modelo de IA con fuentes de datos externas. Permite encadenar tareas para que la IA no solo hable, sino que también "lea" y "busque".
* **Embeddings 🔢:** Son representaciones numéricas de las palabras. Convierten el texto en listas de números para que la computadora pueda entender qué frases se parecen entre sí por su significado.
* **Búsqueda Semántica 🔎:** A diferencia de la búsqueda tradicional (por palabras exactas), esta técnica busca por el "sentido" de la pregunta, encontrando respuestas aunque se usen sinónimos.

---

## 💻 Ejecución Local

Para iniciar el servicio API del chatbot, ejecuta:

```bash
pip install -r requirements.txt
python app/main.py

```

La API estará disponible en: `http://localhost:5000` o `http://127.0.0.1:5000`

---
