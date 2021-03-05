from qiskit import *
from qiskit.tools.visualization import plot_histogram
%matplotlib inline

circuit = QuantumCircuit(3, 3)

## Encoding the quantum state to be teleported.

# |->
circuit.x(0)
circuit.h(0)
circuit.barrier()
circuit.draw()

# Entangle q1 and q2
circuit.h(1)
circuit.cx(1,2)
circuit.draw()

from qiskit.tools.visualization import plot_bloch_multivector
simulator = Aer.get_backend('statevector_simulator')

result = execute(circuit, backend = simulator).result()
statevector = result.get_statevector()
print(statevector)
plot_bloch_(statevector)

circuit.barrier()
circuit.cx(0, 1)
circuit.h(0)
circuit.draw()

result = execute(circuit, backend = simulator).result()
statevector = result.get_statevector()
print(statevector)
plot_bloch_multivector(statevector)

circuit.barrier()
circuit.measure([0,1], [0,1])
circuit.draw()

circuit.barrier()
circuit.cx(1, 2)
circuit.cz(0, 2)
circuit.draw()

result = execute(circuit, backend = simulator).result()
statevector = result.get_statevector()
print(statevector)
plot_bloch_multivector(statevector)

circuit.measure(2, 2)
simulator = Aer.get_backend('qasm_simulator')
result = execute(circuit, backend = simulator, shots = 1024).result()
plot_histogram(result.get_counts())

