This file contains some code used to generate images for my explanations

import random
from matplotlib import pyplot as plt
import networkx as nx

def random_unweighted(num_nodes):
    # Create a list of numbers up to the number of nodes, and shuffle it 
    nodes = list(range(num_nodes))
    random.shuffle(nodes)
    G = nx.Graph()
    
    for i in range(num_nodes-1):
        G.add_edge(nodes[i], nodes[i+1])
    
    return G
    
linear_graph = random_unweighted(5)
nx.draw(linear_graph, with_labels=True, font_weight='bold', font_color = "white")
plt.savefig("LinearGraph.png")

