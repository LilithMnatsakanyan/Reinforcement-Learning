# **Reinforcement Learning Projects**

This repository contains a collection of hands-on **Reinforcement Learning (RL)** projects, each focused on implementing and analyzing different algorithms and environments from the textbook **_Reinforcement Learning: An Introduction_** by **Richard S. Sutton** and **Andrew G. Barto**.

The goal of this repository is to develop a deeper understanding of:
- ✅ Agent learning and policy optimization
- ✅ Environment dynamics and reward mechanisms
- ✅ Exploration–exploitation tradeoffs
- ✅ On-policy vs. off-policy learning

---

## 📌 **Algorithms and Their Implemented Environments**

| **Algorithm / Method** | **Environment / Project** |
|-------------------------|---------------------------|
| Multi-Armed Bandits (Action–Value Methods) | [ten-armed-testbed](./ten-armed-testbed/) |
| Maximization Bias, Double Q-Learning | [maximization-bias](./maximization-bias/) |
| Dynamic Programming (Policy Evaluation & Improvement) | [gridworld-dp](./gridworld-dp/) |
| MDP Formulation & Value Computation | [gridworld-mdp](./gridworld-mdp/) |
| Optimal Betting (DP) | [gambler-problem](./gambler-problem/) |
| Monte Carlo Prediction & Control | [blackjack](./blackjack/) |
| TD(0) vs Monte Carlo | [random-walk](./random-walk/) |
| n-step TD Learning | [random-walk-ntd](./random-walk-ntd/) |
| Eligibility Traces (Off-line λ-return, TD(λ), True Online TD(λ)) | [random-walk-et](./random-walk-et/) |
| Function Approximation (Polynomial, Fourier, Tile Coding) | [random-walk-fa](./random-walk-fa/) |
| SARSA Control | [windy-gridworld](./windy-gridworld/) |
| SARSA vs Q-Learning | [cliff-walking](./cliff-walking/) |
| Planning (Dyna-Q, Dyna-Q+, Prioritized Sweeping) | [mazes](./mazes/) |
| Sample vs Expected Updates (DP vs TD) | [updates-comparison](./updates-comparison/) |
| Trajectory Sampling (Update Distribution) | [trajectory-sampling](./trajectory-sampling/) |
| Coarse Coding Generalization | [coarse-coding](./coarse-coding/) |
| Semi-gradient n-step SARSA + Tile Coding | [mountain-car](./mountain-car/) |
| Sarsa(λ) + Tile Coding (Eligibility Traces) | [mountain-car-et](./mountain-car-et/) |
| Differential Semi-gradient Sarsa (Average Reward) | [access-control](./access-control/) |
| Off-Policy Failures (Baird’s Counterexample, TDC, Expected TDC, Expected ETD) | [counter-examples](./counter-examples/) |
| Importance Sampling Variance (Off-policy MC failure) | [infinite-variance](./infinite-variance/) |
| Self-Play Value Learning | [tic-tac-toe](./tic-tac-toe/) |


Each project explores a specific RL concept or algorithm and includes its own `README.md` with:
- **Objectives**
- **Methodology**
- **Key Results**
---

## 🚀 **Getting Started**

Below is an example using the **Tic Tac Toe** project.

### 1️⃣ Clone the repository
```sh
git clone https://github.com/LilithMnatsakanyan/Reinforcement_Learning.git
cd Reinforcement_Learning/tic-tac-toe
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

You can play **Tic Tac Toe** in two ways:

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
