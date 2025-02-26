from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from player import RLPlayer
from state import State, get_all_states

app = Flask(__name__)
CORS(app)

# Load RL Player
all_states = get_all_states(rows=3, columns=3)
rl_player = RLPlayer(all_states, epsilon=0)
rl_player.load_policy()


@app.route('/move', methods=['POST'])
def get_move():
    data = request.get_json()
    state_data = np.array(data['state']).reshape(3, 3)  #  Define state_data here

    # Create a state object and set it for the RL player
    state = State()
    state.data = state_data

    rl_player.set_state(state)

    # Get RL player move
    i, j, symbol = rl_player.act()
    return jsonify({"i": int(i), "j": int(j)})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
