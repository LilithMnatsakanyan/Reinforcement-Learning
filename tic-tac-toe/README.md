# **Reinforcement Learning: Tic Tac Toe**  

This project applies **Reinforcement Learning (RL)** to train an agent that plays **Tic Tac Toe** by learning from experience. It features both a **Python-based RL implementation** and a **web-based environment** (HTML, CSS, JavaScript) for interaction.  


---

## **📂 Project Structure**  

```
tic-tac-toe-rl/
│── src/                    # RL core implementation
│   ├── tic-tac-toe.py      # Main game logic
│   ├── judge.py            # Evaluates game states
│   ├── state.py            # Defines board representation
│   ├── player.py           # Player logic (RL and heuristic)
│   ├── policy_first.bin    # Policies for first player
│   ├── policy_second.bin   # Policies for first second player
│   ├── index.html          # Game UI
│   ├── styles.css          # Styling
│   ├── script.js           # Frontend game logic
│   ├── app.py              # Runs the web-based agent
│   ├── requirements.txt    # Dependencies
│── README.md               # Project documentation
```

---

## **🚀 Getting Started**  

### 1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/LilithMnatsakanyan/tic-tac-toe.git  
cd tic-tac-toe
```

### 2️⃣ **Install Dependencies**  
```sh
pip install -r requirements.txt  
```

### 3️⃣ **Train the RL Agent**  
```sh
python src/tic-tac-toe.py  
```

### 4️⃣ **Play the Game**  

You can play Tic Tac Toe in two ways:  

✅ **Web-based interface** (Recommended):  
```sh
python app.py  
```
Then open `index.html` in your browser to play against the AI.  

✅ **Console-based interface** (Using keyboard letters for a 3×3 grid):  
```sh
python src/tic-tac-toe.py  
```
Use the following keys to place `X` or `O`:  
```
q | w | e  
---------
a | s | d  
---------
z | x | c  
```
For example, pressing `q` places a move in the **top-left** corner, and `d` places a move in the **center-right** position.  

---

## **📌 How the AI Learns**  

- **Self-Play Training**: The agent improves by playing against itself.  
- **State-Value Learning**: Assigns values to board positions based on past results.  
- **Policy Updates**: Uses different strategies for first and second players.  
- **Judging System**: `judge.py` evaluates game outcomes for training.   

---