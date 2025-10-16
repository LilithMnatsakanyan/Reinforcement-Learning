# **Reinforcement Learning Projects**

This repository contains a collection of hands-on **Reinforcement Learning (RL)** projects, each focused on implementing and analyzing different algorithms and environments from the textbook **_Reinforcement Learning: An Introduction_** by **Richard S. Sutton** and **Andrew G. Barto**.

The goal of this repository is to develop a deeper understanding of:
- ✅ Agent learning and policy optimization
- ✅ Environment dynamics and reward mechanisms
- ✅ Exploration–exploitation tradeoffs
- ✅ On-policy vs. off-policy learning

---

## 🧠 **Projects Overview**

Each project explores a specific RL concept or algorithm and includes its own `README.md` with:
- **Objectives** – What the project aims to demonstrate
- **Methodology** – Core algorithms and environment setup
- **Key Results** – Visualizations, learning curves, and interpretations

---

## 📂 **Current Projects**

### 🧩 **Foundations and Value-Based Learning**
- [tic-tac-toe](./tic-tac-toe/) – Self-play using state-value learning
- [ten-armed-testbed](./ten-armed-testbed/) – Multi-armed bandits with ε-greedy strategy

### 🧮 **Dynamic Programming and Model-Based Control**
- [gridworld-dp](./gridworld-dp/) – Policy evaluation and improvement using Dynamic Programming
- [gridworld-mdp](./gridworld-mdp/) – MDP formulation and planning
- [gambler-problem](./gambler-problem/) – Dynamic programming for optimal betting

### 🎲 **Monte Carlo and Temporal-Difference Methods**
- [blackjack](./blackjack/) – Policy evaluation using Monte Carlo
- [random-walk](./random-walk/) – TD(0) vs Monte Carlo prediction
- [random-walk-ntd](./random-walk-ntd/) – n-step TD learning and return estimation

### ⚙️ **Control and Exploration**
- [windy-gridworld](./windy-gridworld/) – SARSA learning in a stochastic grid environment
- [cliff-walking](./cliff-walking/) – Episodic control with ε-greedy and SARSA/Q-learning
- [maximization-bias](./maximization-bias/) – Demonstrating maximization bias with Q-learning vs Double Q-learning

### 🧠 **Planning and Model-Based Reinforcement Learning**
- [infinite-variance](./infinite-variance/) – Off-policy learning and variance analysis
- [mazes](./mazes/) – Dyna-Q, Dyna-Q+, and Prioritized Sweeping (planning and learning integration)
- [updates-comparison](./updates-comparison/) – Expected vs sample updates in planning
- [trajectory-sampling](./trajectory-sampling/) – Uniform vs on-policy update distributions

### 🔢 **Function Approximation and Generalization**
- [random-walk-fa](./random-walk-fa/) – Function approximation methods (polynomial, Fourier, tile coding)
- [coarse-coding](./coarse-coding/) – Coarse coding and generalization in value function approximation


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

### 🎯 **Foundational Algorithms**
- Multi-Armed Bandits (Action-Value Methods)
- Dynamic Programming (Policy Evaluation & Improvement)
- Monte Carlo Prediction and Control
- Temporal-Difference Learning (TD(0), n-step TD, SARSA, Q-Learning)
- Planning Methods (Dyna-Q, Prioritized Sweeping)
- Off-policy Learning and Variance (Importance Sampling)
- Function Approximation (Linear, Fourier, Tile Coding, Coarse Coding)
- Double Q-Learning

### 🧪 **Experimental Environments**
- Tic-Tac-Toe
- Multi-Armed Bandits (Ten-Armed Testbed)
- Gridworld (DP and MDP Variants)
- Gambler’s Problem
- Blackjack
- Random Walk (1D and n-step Variants)
- Windy Gridworld
- Cliff Walking
- Infinite Variance
- Mazes (Dyna-Q and Prioritized Sweeping)
- Updates Comparison
- Trajectory Sampling
- Random Walk with Function Approximation
- Square Wave (Coarse Coding / Feature Width Analysis)
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
