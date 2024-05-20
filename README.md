# PANT HackWithAI

https://devpost.com/software/subbrain?ref_content=user-portfolio&ref_feature=in_progress

<img width="1728" alt="Screenshot 2024-05-19 at 3 23 26 PM" src="https://github.com/AidenAR/AidenAR-SubBrain-AR/assets/88297517/2aa0895c-0c8b-413e-b4a6-e6219bb6991f">

<img width="1728" alt="Screenshot 2024-05-19 at 3 24 14 PM" src="https://github.com/AidenAR/AidenAR-SubBrain-AR/assets/88297517/a02de89c-1b0b-4caf-a42e-990e24ac0c3f">



Inspiration TLDR; Using Reddit as a platform enables the development of a Language Model for knowledge retrieval, offering real-time market insights, sentiment analysis on prevailing trends, and responses to inquiries based on historical data.

The common stereotype of REDDITORS are that they are verbose, pedantic, and overly confident in their knowledge. Although they are known for their long rants on obscure topics and "terrible" advice", there are some gems like r/uwaterloo, r/cscareeradvice etc. that provide great advice. We wanted to see if we could retrieve information from these subreddits and power a web-based chatbot application.

🔍 What it does The UI interface allows users to enter the subreddit they would like to use. This opens a chat screen, where users can then enter their questions and get a response from them.

⚙️ How we built it

Frontend: We developed the client-side of our web application using React.js, crafting interactive user interfaces and components. To ensure a cohesive design and smooth user experience, we utilized MaterialUI Library for styling our components.

Backend: We use FastAPI for our middleware, which takes in a query and sends it to our RAG LLM model which then generates a response.

🚧 Challenges we ran into We originally planned to train our own llm but because of the short time period we switched to using Retrieval-Augmented Generation as recommended by one of the mentors. This was new to all of us and required some trial and error.

Our project required a large dataset which was difficult to generate on such a short time frame. We would have liked to expand our project to cover many subreddits.

✔️ Accomplishments that we're proud of
It was our first time using RAG, LangChain, the OpenAI API, and FastAPI, so being able to stitch together a functioning product in such a short time constraint was an achievement for us.

