# **Reinforcement Learning Projects**

This repository contains a collection of hands-on **Reinforcement Learning (RL)** projects, each focused on implementing and analyzing different algorithms and environments from the textbook **Reinforcement Learning: An Introduction** by Sutton & Barto.

The goal of this repository is to develop a deeper understanding of:
- ✅ Agent learning and policy optimization
- ✅ Environment dynamics and reward mechanisms
- ✅ Exploration-exploitation tradeoffs
- ✅ On-policy vs. off-policy learning

---

## 🧠 **Projects Overview**

Each project explores a specific RL concept or algorithm, and includes its own `README.md` with:
- **Objectives** – What the project aims to demonstrate
- **Methodology** – Core algorithms and environment setup
- **Key Results** – Visualizations, learning curves, and observations

---

## 📂 **Current Projects**


- [tic-tac-toe](./tic-tac-toe/) – Self-play using state-value learning
- [ten-armed-testbed](./ten-armed-testbed/) – Multi-armed bandits with ε-greedy strategy
- [gridworld-dp](./gridworld-dp/) – Policy evaluation and improvement using Dynamic Programming
- [gridworld-mdp](./gridworld-mdp/) – MDP formulation and planning
- [gambler-problem](./gambler-problem/) – Dynamic programming for optimal betting
- [blackjack](./blackjack/) – Policy evaluation using Monte Carlo
- [infinite-variance](./infinite-variance/) – Off-policy learning and variance analysis
- [random-walk](./random-walk/) – TD(0) vs Monte Carlo prediction
- [windy-gridworld](./windy-gridworld/) – SARSA learning in stochastic grid environment
- [cliff-walking](./cliff-walking/) – Episodic control with ε-greedy and SARSA/Q-learning
- [maximization-bias](./maximization-bias/) – Demonstrating maximization bias with Q-learning vs Double Q-learning

Each project may contain **notebooks**, **scripts**, and **configuration files** specific to its implementation.

---

## **🚀 Getting Started** 
_(Example on tic-tac-toe project)_

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

---

## 📌 **Key Topics Covered**

### 🎯 Foundational Algorithms
- Multi-Armed Bandits (Action-Value Methods)
- Dynamic Programming (Policy Evaluation & Improvement)
- Monte Carlo Prediction and Control
- Temporal-Difference Learning (TD(0), SARSA, Q-Learning)
- Off-policy Learning and Variance (Importance Sampling)
- Double Q-Learning 

### 🧪 Experimental Environments
- Tic-Tac-Toe
- Multi-Armed Bandits (Ten-Armed Testbed)
- Gridworld (DP and MDP Variants)
- Gambler's Problem
- Blackjack
- Infinite Variance
- Random Walk
- Windy Gridworld
- Cliff Walking
- Maximization Bias

---

## **📚 Dependencies & Tools**

This repository primarily uses:
- **Python 3.x**
- **NumPy, Pandas** (Data handling)
- **Matplotlib, Seaborn** (Visualization)
- **tqdm** (Progress bars for episode tracking)


---

## 📖 **Reference**

> **Reinforcement Learning: An Introduction**  
> Richard S. Sutton & Andrew G. Barto  
> _Second Edition, 2018 – MIT Press_  
> [Read online](https://www.andrew.cmu.edu/course/10-703/textbook/BartoSutton.pdf)

---

## 📬 **Contact**

If you have any questions, feel free to reach out! 😊

🔗 GitHub: [github.com/LilithMnatsakanyan](https://github.com/LilithMnatsakanyan)

---
