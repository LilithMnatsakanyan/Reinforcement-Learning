# **Reinforcement Learning: Counter-Examples**

This project implements **Baird’s Counterexample** from **Chapter 11 — Off-policy Methods with Function Approximation** in *Reinforcement Learning: An Introduction* by Richard S. Sutton & Andrew G. Barto*.  
It demonstrates how **off-policy TD(0)** diverges when used with **linear function approximation**, even in a simple 7-state MDP.

The project includes:

- **Baird’s 7-state star MDP**
- **Semi-gradient off-policy TD(0)** (divergence)
- **Semi-gradient Dynamic Programming (DP)** (stable baseline)
- **RMSVE** and **RMSPBE** evaluation

---


## **📂 Project Structure**
```
counter-examples/
├── book_images/               # Reference figures from Sutton & Barto (Chapter 11)
│   ├── Figure_11_1.PNG        # Baird’s 7-state star diagram
│   ├── Figure_11_2.PNG        # Divergence of off-policy TD(0)
│   ├── Figure_11_5.PNG        # TDC / GTD(0) behavior
│   └── Figure_11_6.PNG        # Emphatic TD behavior
├── generated_images/          # Plots produced from simulation
│   └── figure_11_2.png        # Reproduced RMSVE divergence curve
├── notebooks/                 # Experiment notebooks for different methods
│   ├── bairds_counterexample.ipynb   # Semi-gradient TD divergence experiment
│   ├── emphatic_baird.ipynb          # Expected Emphatic TD implementation
│   └── tdc_baird.ipynb               # TDC / GTD(0) experiments
├── src/
│   └── counter_example.py     # Core implementation of Baird’s counterexample
└── README.md                  # Project documentation

```

---

## ✅ Key Features
- Implements the **canonical 7-state counterexample**
- Shows divergence of **semi-gradient off-policy TD(0)**
- Provides **stable semi-gradient DP** as comparison
- Computes **RMSVE** and **RMSPBE** error metrics
- Reproduces the qualitative behavior in **Figure 11.2**

---

## 🧩 Baird’s 7-State Counterexample

This minimal MDP reveals a fundamental failure of off-policy TD with linear approximation.

- **Upper states (0–5):**
    - Feature *i* = 2
    - Last feature = 1

- **Lower state (6):**
    - Second-to-last feature = 1
    - Last feature = 2

- **Reward:** always 0
- **True value function:** identically 0
- **Target policy:** always chooses the *solid* action
- **Behavior policy:** chooses *solid* with probability 1/7

This mismatch (off-policy sampling + bootstrapping + function approximation) causes TD to **diverge**.

---

## 🧮 Error Metrics

### **1. RMSVE — Root Mean Square Value Error**

Since the true value function is zero:

$$
\text{RMSVE} = \sqrt{\sum_s \mu(s) \bigl( w^\top x(s) \bigr)^2}
$$

### **2. RMSPBE — Root Mean Square Projected Bellman Error**

Computed using the projection matrix:

$$
\Pi = F (F^\top D F)^+ F^\top D
$$

---

## 🔄 Semi-gradient TD(0) — Divergence

Implements Sutton’s **Equation (11.2)**:

$$
w \leftarrow w + \alpha \, \rho \, \delta \, x(s)
$$

- Off-policy sampling
- Linear function approximation
- Bootstrapping


---

## 🔁 Semi-Gradient DP — Stable Baseline

Implements **Equation (11.9)**:

- Expected update over all states
- No bootstrapping instability
- Produces stable weight evolution

Useful for contrasting with TD divergence.

---

## 📖 Book Reference Visualizations

### **Figure 11_1 — Baird’s Star Diagram**
<img src="book_images/Figure_11_1.PNG" width="600"/>

### **Figure 11_2 — Off-policy TD Divergence (Book)**
<img src="book_images/Figure_11_2.PNG" width="600"/>

---

## 🖼️ Generated Visualization

### **Figure 11_2 — RMSVE Divergence (Reproduced)**
<img src="generated_images/figure_11_2.png" width="600"/>

The reproduced RMSVE curve matches the characteristic exponential divergence described in Figure 11.2.

---

## 🔍 Key Observations
- Off-policy TD(0) **diverges**, even in simple linear settings
- Divergence arises from the combination of:
    - Function approximation
    - Bootstrapping
    - Off-policy sampling
- Semi-gradient DP offers a **stable baseline**
- RMSVE and RMSPBE give insight into learning behavior and error geometry

---

## 🏁 Conclusion

This project cleanly reproduces **Baird’s Counterexample**, demonstrating the failure of **off-policy TD(0)** under linear function approximation.  
It provides stable and unstable methods (DP vs. TD) and error metrics consistent with **Chapter 11** of Sutton & Barto.

---
