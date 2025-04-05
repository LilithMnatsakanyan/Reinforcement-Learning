# **Gridworld DP**

This project implements **Dynamic Programming (DP)** methods in the **Gridworld** environment, based on **Chapter 4: Dynamic Programming** from the book **Reinforcement Learning: An Introduction** by **Richard S. Sutton & Andrew G. Barto**.

## **📖 References**
This repository is based on:

- **Reinforcement Learning: An Introduction**  
  **Richard S. Sutton & Andrew G. Barto**  
  _Second Edition, MIT Press, 2018_  
  [Read more](https://www.andrew.cmu.edu/course/10-703/textbook/BartoSutton.pdf)

---

## **📂 Project Structure**
```
gridworld-dp/
│── src/                      # Core implementation
│   ├── __init__.py  
│   ├── grid_world.py         # Gridworld DP logic
│── notebooks/                # Jupyter Notebooks for experimentation
│   ├── grid_world.ipynb      
│── book_images/              # Reference images from the book
│   ├── Example_4_1.PNG       # Policy iteration example (book version)
│   ├── Figure_4_1.PNG        # Gridworld configuration and value function example
│── generated_images/         # Plots generated from simulations
│   ├── figure_4_1_in_place.png      # In-place policy evaluation results
│   ├── figure_4_1_out_place.png     # Out-of-place policy evaluation results
│── README.md                 # Project documentation
```

---

## **🚀 Getting Started**

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/LilithMnatsakanyan/gridworld-dp.git  
cd gridworld-dp
```

### 2️⃣ **Install Dependencies**
```sh
pip install -r requirements.txt  
```

### ️3️⃣ **Run and experiment with Jupyter Notebooks**
```sh
jupyter notebook notebooks/grid_world.ipynb
```

---

## 📌 Key Features

✅ Implements **Dynamic Programming** for policy evaluation and improvement in Gridworld.  
✅ Demonstrates **in-place vs. out-of-place** updates.  
✅ Visualizes the **value function** and **policy iteration process**.  
✅ Clean separation between logic and experiments using notebooks.  
✅ Great for building foundational understanding of RL.

---

## 📊 Results and Visualizations

### 1️⃣ **In-Place Policy Evaluation**
This approach updates the value of each state as soon as a new estimate is available.

📈 **Visualization:**

![figure_4_1_in_place.png](generated_images/figure_4_1_in_place.png)

(This plot shows the value function computed using in-place dynamic programming.)

---

### 2️⃣ **Out-of-Place Policy Evaluation**
This approach computes the entire new value function based on the old one before replacing it.

📈 **Visualization:**

![figure_4_1_out_place.png](generated_images/figure_4_1_out_place.png)

(This plot illustrates the value function computed using out-of-place updates.)

---

## 📢 Conclusion

This project explores **Dynamic Programming techniques** applied to the **Gridworld** environment:

- **In-place and out-of-place updates** for policy evaluation.  
- Understanding **policy iteration** and **value iteration**.  
- Lays the groundwork for **model-based reinforcement learning**.

Through these techniques, we gain an intuition for how agents can plan and make decisions in structured environments.

---

