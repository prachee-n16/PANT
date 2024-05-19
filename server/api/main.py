# main.py

from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware


from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import FAISS
from langchain.chat_models import ChatOpenAI
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains import create_retrieval_chain


db = Chroma(persist_directory="./chromadb",embedding_function=embedding)


# Create retriever
retriever = db.as_retriever()

# Define prompt template
template = """
You are an assistant for question-answering tasks.
Use the provided context to help you answer the following question:

<context>
{context}
</context>

Question: {input}
"""

# Create a prompt template
prompt = ChatPromptTemplate.from_template(template)

# Create a chain 
doc_chain = create_stuff_documents_chain(llm, prompt)
chain = create_retrieval_chain(retriever, doc_chain)


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/q/")
async def read_q(question: str = ""):
    # User query 
    response = chain.invoke({"input": question})

# Get the Answer only
    response['answer']
    print(response)
    return {"question": response}

@app.get("/sub/")
async def read_s(subreddit: str = "cscareeradvice"):
    return {"subreddit": subreddit}