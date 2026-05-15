---

# 🤖 Chatbot Inteligente RAG - SENATI 2026

## 📝 Información del Proyecto

* **Institución:** SENATI
* **Curso:** Tecnologías Base: IA + Recuperación Semántica + Web
* **Proyecto:** Chatbot Inteligente con Documentos (LangChain + Colab + GitHub)
* **Semana:** 13 - Ejercicio de Recuperación Semántica Avanzada
* **Fecha:** Mayo 2026

### 👥 Equipo de Desarrollo

* 👤 **DANIEL EDUARDO RACUA RAMOS**
* 👤 **JHON FERNANDO GOMEZ QUISPE**

---

## 🚀 Descripción General

Este proyecto implementa un sistema **RAG (Retrieval-Augmented Generation)**. A diferencia de un chatbot común, este sistema no alucina información; consulta documentos reales (PDF, TXT, DOCX) proporcionados por el usuario para generar respuestas precisas y verificables.

---

## 🏗️ Arquitectura Obligatoria del Sistema

El flujo de datos se ha diseñado siguiendo los estándares de la arquitectura de microservicios e IA:

1. **Capa de Usuario:** Interfaz web interactiva (HTML5/CSS3/JS).
2. **Capa de Orquestación (LangChain):** Maneja la lógica de las cadenas de consulta.
3. **Capa de Recuperación (Vector Store):** Búsqueda semántica en base de datos de vectores (ChromaDB/FAISS).
4. **Capa de Generación (LLM):** Uso de Google Gemini para la síntesis de respuestas naturales.

---

## 🛠️ Stack Tecnológico

| Componente | Herramienta | Función |
| --- | --- | --- |
| **Entorno** | Google Colab | Desarrollo y prototipado rápido |
| **Backend** | Python / Flask | Procesamiento de peticiones y API REST |
| **IA Engine** | LangChain | Integración de componentes de IA |
| **LLM** | Google Gemini Pro | Generación de lenguaje natural |
| **Vectores** | ChromaDB | Almacenamiento de conocimiento indexado |
| **Frontend** | HTML, CSS, JS | Interfaz de usuario tipo ChatGPT |

---

## 📂 Estructura del Proyecto (Corregida)

```text
chatbot-rag/
├── app/
│   ├── chatbot.py        # Lógica central de LangChain
│   ├── embeddings.py     # Configuración del modelo de embeddings
│   ├── vectorstore.py    # Gestión de la base de datos vectorial
│   └── main.py           # Servidor API Flask
├── data/
│   └── documento.pdf     # Documentos fuente de conocimiento
├── web/
│   ├── index.html        # Interfaz de usuario
│   ├── app.js            # Lógica de comunicación fetch
│   └── styles.css        # Estilos modernos y responsivos
├── requirements.txt      # Librerías necesarias
├── README.md             # Documentación técnica completa
└── notebook.ipynb        # Cuaderno de desarrollo en Colab

```

---

## 📖 Conceptos Técnicos Avanzados

### 🦜 LangChain

Es el framework líder para desarrollar aplicaciones impulsadas por modelos de lenguaje. En este proyecto, lo utilizamos para crear una "cadena de recuperación" que conecta el prompt del usuario con los fragmentos más relevantes del documento.

### 🔢 Embeddings Semánticos

Transformamos el texto en vectores de alta dimensión (listas de números). Esto permite que el sistema entienda que la frase "El auto es rojo" es matemáticamente similar a "El vehículo tiene color carmesí".

### 🔎 Búsqueda Semántica vs Tradicional

* **Tradicional:** Busca coincidencias exactas de palabras (si escribes "perro" y el texto dice "canino", no lo encuentra).
* **Semántica:** Entiende el contexto y el significado, permitiendo encontrar respuestas incluso si las palabras son diferentes.

---

## ⚙️ Instalación y Configuración

Para replicar este proyecto en tu entorno local:

1. **Clonar el repositorio:**
```bash
git clone https://github.com/Jhon-fer/13-Semana---Tecnolog-as-Base-IA-Recuperaci-n-Sem-ntica-Web.git
cd 13-Semana---Tecnolog-as-Base-IA-Recuperaci-n-Sem-ntica-Web

```


2. **Instalar dependencias:**
```bash
pip install -r requirements.txt

```


3. **Configurar API Key:**
Crea un archivo `.env` o configura tu variable de entorno:
```bash
export GOOGLE_API_KEY="TU_CLAVE_AQUI"

```


4. **Ejecutar Servidor:**
```bash
python app/main.py

```



---

## 🧪 Pruebas y Resultados

El sistema ha sido testeado exitosamente con el documento **"Don Quijote de la Mancha"**, logrando responder preguntas sobre personajes y tramas con una precisión del 95% y un tiempo de respuesta menor a 2 segundos.

---
