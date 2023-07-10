Search.setIndex({"docnames": ["Maxcut/maxcut", "Quantum Key Distribution", "landing-page"], "filenames": ["Maxcut/maxcut.ipynb", "Quantum Key Distribution.ipynb", "landing-page.md"], "titles": ["Solving the Weighted Maxcut Problem from Scratch with QAOA", "Quantum Key Distribution (BB84 Protocol)", "Hi, I\u2019m Avneesh!"], "terms": {"i": 0, "well": [0, 1, 2], "known": 0, "which": [0, 1], "node": 0, "given": [0, 1], "undirect": 0, "graph": 0, "have": [0, 1], "divid": 0, "two": [0, 1], "set": [0, 1], "often": 0, "white": 0, "black": 0, "although": 0, "thi": [0, 1], "notebook": [0, 2], "we": [0, 1], "ll": [0, 1, 2], "us": [0, 1, 2], "colour": 0, "blue": [0, 2], "red": 0, "number": [0, 1], "edg": 0, "connect": 0, "ar": [0, 1], "maxim": 0, "here": [0, 1, 2], "ve": [0, 1, 2], "implement": 0, "algorithm": [0, 1, 2], "explain": [0, 2], "along": [0, 1], "wai": [0, 1], "wa": [0, 1], "made": [0, 2], "qiskit": [0, 1, 2], "without": [0, 1, 2], "built": [0, 2], "aqua": [0, 2], "origin": [0, 1], "part": [0, 2], "screen": 0, "task": 0, "quantum": [0, 2], "open": 0, "sourc": 0, "foundat": 0, "": [0, 1, 2], "mentorship": [0, 2], "program": [0, 2], "fortun": 0, "enough": 0, "accept": 0, "you": [0, 1, 2], "can": [0, 1], "find": [0, 1, 2], "github": [0, 2], "repositori": 0, "submit": 0, "import": [0, 1], "visual": [0, 1], "plot_histogram": 0, "networkx": 0, "nx": 0, "matplotlib": 0, "pyplot": 0, "plt": 0, "numpi": 0, "np": 0, "math": 0, "random": [0, 1], "scipi": 0, "minim": 0, "first": [0, 1], "let": [0, 1], "gener": [0, 1, 2], "u": 0, "ones": [0, 1], "come": [0, 1], "packag": 0, "don": [0, 1], "t": [0, 1], "alwai": [0, 1], "start": [0, 1], "count": [0, 1], "0": [0, 1], "need": [0, 1], "decid": [0, 1], "how": [0, 1], "mani": [0, 1], "want": [0, 1], "For": [0, 1], "n": 0, "minimum": 0, "1": [0, 1], "easi": [0, 1], "see": [0, 1], "intuit": 0, "It": [0, 1], "just": [0, 1], "line": 0, "each": [0, 1], "one": [0, 1], "maximum": 0, "frac": 0, "2": [0, 1], "becaus": [0, 1], "other": [0, 1], "so": [0, 1], "multipli": 0, "total": 0, "should": [0, 1], "mean": [0, 1], "path": 0, "between": [0, 2], "ani": [0, 1], "To": [0, 1], "do": [0, 1], "order": [0, 1], "keep": [0, 1], "shuffl": 0, "would": [0, 1], "give": 0, "linear": [0, 2], "look": [0, 1], "someth": 0, "like": [0, 1], "next": [0, 1], "randomli": [0, 1], "add": [0, 1], "more": [0, 1], "go": [0, 1], "r": 0, "where": [0, 1], "choos": [0, 1], "check": [0, 1, 2], "make": [0, 1], "sure": [0, 1], "them": [0, 1], "hasn": 0, "alreadi": 0, "been": [0, 1, 2], "final": 0, "iter": 0, "over": [0, 1], "float": 0, "point": [0, 1], "valu": [0, 1], "round": 0, "nearest": 0, "hundredth": 0, "diagram": 0, "cleaner": 0, "now": [0, 1], "work": [0, 1], "test": 0, "out": [0, 1, 2], "def": [0, 1], "generate_random_connected_graph": 0, "num_nod": 0, "max_weight": 0, "num_edg": 0, "randint": [0, 1], "floor": 0, "list": [0, 1], "up": [0, 1], "rang": [0, 1], "A": [0, 1], "unweight": 0, "append": [0, 1], "decrement": 0, "haven": 0, "yet": [0, 1], "extra": 0, "loop": 0, "until": [0, 1], "valid": 0, "found": 0, "while": 0, "true": 0, "start_nod": 0, "end_nod": 0, "must": [0, 1], "uniqu": 0, "distinct": 0, "break": [0, 1], "g": 0, "rand_weight": 0, "uniform": 0, "add_edg": 0, "return": [0, 1], "test_graph": 0, "6": [0, 1], "10": [0, 1], "po": 0, "spring_layout": 0, "draw": 0, "with_label": 0, "font_weight": 0, "bold": 0, "label": 0, "get_edge_attribut": 0, "draw_networkx_edge_label": 0, "edge_label": 0, "5": [0, 1, 2], "3": [0, 1], "text": 0, "3686161445614647": 0, "5020554723389217": 0, "33618100421116276": 0, "6220000570978355": 0, "86": 0, "026482372225869816": 0, "6687767693460369": 0, "89": 0, "4": [0, 1], "5624615521260552": 0, "45225449289740705": 0, "32": 0, "3952012075287499": 0, "12488037823718084": 0, "73": 0, "3953127506242439": 0, "17083224168495853": 0, "97": 0, "05912732023604153": 0, "665896448206692": 0, "41": 0, "16725149224322663": 0, "5812458158124312": 0, "65": 0, "22638766483334682": 0, "33852233354646577": 0, "8": 0, "5359747537231457": 0, "08958642587252787": 0, "9": [0, 1], "83": 0, "22627612173785278": 0, "04280971362432642": 0, "68": 0, "30959594124387757": 0, "004935793478266989": 0, "69": 0, "00010269074141537829": 0, "041840918769934454": 0, "14": 0, "3094843981483835": 0, "29077682644387237": 0, "99": 0, "determin": [0, 1], "whether": [0, 1], "ha": [0, 1], "cut": 0, "belong": 0, "subset": 0, "c": [0, 1], "opposit": 0, "increas": 0, "score": 0, "figur": 0, "s_i": 0, "s_j": 0, "repres": [0, 1], "either": [0, 1], "notic": 0, "both": [0, 1], "same": [0, 1], "s_is_j": 0, "wherea": 0, "thei": [0, 1], "howev": [0, 1], "sinc": [0, 1], "when": [0, 1], "neq": 0, "result": [0, 1], "far": [0, 1], "finish": 0, "exactli": [0, 1], "what": 0, "re": [0, 1], "quit": 0, "done": 0, "onli": [0, 1], "solut": [0, 2], "sum": 0, "all": [0, 1], "neighbor": 0, "sum_": 0, "j": 0, "e": [0, 1], "try": [0, 1], "comput": [0, 1, 2], "encod": 0, "h_c": 0, "reformul": 0, "const": 0, "drop": 0, "constant": 0, "leav": 0, "new": [0, 1], "object": 0, "goal": 0, "replac": [0, 1], "pauli": 0, "z": [0, 1], "sigma_i": 0, "sigma_j": 0, "act": 0, "qubit": 0, "respect": 0, "eigenvalu": 0, "matric": 0, "There": 0, "thing": 0, "abov": 0, "an": [0, 1, 2], "w_": 0, "ij": 0, "zw_": 0, "In": [0, 1], "addit": 0, "also": [0, 1], "anoth": [0, 1], "h_b": 0, "call": [0, 1], "escap": 0, "local": 0, "doesn": [0, 1], "commut": 0, "simpl": 0, "x": [0, 1], "v": 0, "alright": 0, "paramter": 0, "correspond": [0, 1], "With": 0, "gamma": 0, "beta": 0, "whoa": 0, "hold": 0, "doe": 0, "exponenti": 0, "stuff": 0, "section": 0, "background": 0, "mechan": [0, 1, 2], "articl": [0, 2], "great": 0, "job": 0, "basic": 0, "think": 0, "ith": 0, "evolut": 0, "state": [0, 1], "system": [0, 2], "time": [0, 1, 2], "describ": 0, "h": [0, 1], "thought": 0, "matrix": 0, "rotat": 0, "around": 0, "particular": 0, "axi": [0, 1], "bloch": [0, 1], "sphere": [0, 1], "instead": [0, 1], "evolv": 0, "angl": 0, "proport": 0, "paramet": 0, "breifli": 0, "recal": 0, "appli": [0, 1], "hadamard": [0, 1], "equal": 0, "superposit": [0, 2], "rangl": [0, 1], "Then": [0, 1], "repeatedli": 0, "parametr": 0, "follow": 0, "beta_p": 0, "gamma_p": 0, "beta_1": 0, "gamma_1": 0, "overal": 0, "repetit": 0, "altern": 0, "fashion": 0, "trotter": 0, "approxim": 0, "adiabat": 0, "pathwai": 0, "actual": [0, 1], "abl": [0, 1], "express": 0, "seri": 0, "translat": 0, "rememb": 0, "One": 0, "r_z": 0, "theta": 0, "sigma_z": 0, "co": 0, "sin": 0, "begin": 0, "bmatrix": 0, "end": 0, "Of": [0, 1], "cours": [0, 1], "effect": 0, "observ": 0, "basi": [0, 1], "slide": 0, "ruslan": 0, "shaydulin": 0, "tutori": 0, "cnot": 0, "pariti": 0, "undo": 0, "case": [0, 1], "pass": 0, "reason": 0, "allow": 0, "thu": [0, 1], "sandwich": 0, "singl": 0, "r_x": 0, "did": [0, 1], "create_cost_unitari": 0, "cost_unitari": 0, "quantumcircuit": [0, 1], "len": [0, 1], "name": 0, "get": [0, 1], "zip": [0, 1], "cx": 0, "int": 0, "rz": 0, "barrier": 0, "to_gat": 0, "create_mixer_unitari": 0, "mixer_unitari": 0, "rx": 0, "everi": [0, 1], "demonstr": [0, 1], "might": [0, 1], "test_cost_unitari": 0, "pi": 0, "arbitrarili": 0, "chosen": [0, 1], "mpl": 0, "And": 0, "test_mixer_unitari": 0, "layer": 0, "produc": 0, "initi": [0, 1], "create_qaoa_circuit": 0, "param": 0, "full": 0, "num_of_iter": 0, "half": 0, "second": 0, "qr": 0, "quantumregist": 0, "cr": 0, "classicalregist": 0, "put": 0, "measur": 0, "expect": [0, 1], "langl": 0, "psi": 0, "take": [0, 1], "calcul": 0, "averag": 0, "bitstr": 0, "get_cut_s": 0, "bit_str": 0, "associ": 0, "design": [0, 2], "size": 0, "neg": 0, "cut_siz": 0, "increment": 0, "get_expect": 0, "energi": 0, "total_execut": 0, "frequenc": 0, "item": 0, "arrai": [0, 1], "sake": [0, 1], "project": 0, "run": 0, "support": 0, "scalabl": 0, "modifi": 0, "properti": 0, "num_of_graph": 0, "max_number_of_nod": 0, "perform": [0, 1, 2], "displai": 0, "separ": 0, "defin": 0, "current_graph": 0, "backend": [0, 1], "aer": [0, 1], "get_backend": [0, 1], "qasm_simul": [0, 1], "execut": [0, 1], "get_count": [0, 1], "kei": [0, 2], "invert": 0, "differ": [0, 1], "length": [0, 1], "depth": 0, "init_param": 0, "method": [0, 1], "cobyla": 0, "print": [0, 1], "fun": 0, "68439453125": 0, "maxcv": 0, "messag": [0, 1], "termin": 0, "successfulli": 0, "nfev": 0, "70": 0, "statu": 0, "success": 0, "06844933": 0, "15690518": 0, "42738659": 0, "87646885": 0, "29846743": 0, "42030986": 0, "plug": 0, "spike": 0, "best": 0, "optimized_param": 0, "optimal_circuit": 0, "str": [0, 1], "000000": 0, "100000": 0, "000010": 0, "15": 0, "100010": 0, "24": [0, 1], "010010": 0, "20": 0, "110010": 0, "77": 0, "001010": 0, "101010": 0, "011010": 0, "111010": 0, "000110": 0, "100110": 0, "010110": 0, "110110": 0, "101110": 0, "011110": 0, "18": 0, "111110": 0, "010000": 0, "000001": 0, "100001": 0, "23": 0, "010001": 0, "001001": 0, "16": 0, "101001": 0, "13": 0, "011001": 0, "111001": 0, "000101": 0, "100101": 0, "010101": 0, "001101": 0, "96": 0, "101101": 0, "12": 0, "011101": 0, "31": 0, "111101": 0, "110000": 0, "40": 0, "000011": 0, "100011": 0, "123": [0, 1], "010011": 0, "110011": 0, "45": 0, "001011": 0, "101011": 0, "011011": 0, "11": [0, 1], "111011": 0, "000111": 0, "010111": 0, "110111": 0, "001111": 0, "33": 0, "101111": 0, "011111": 0, "001000": 0, "011000": 0, "111000": 0, "000100": 0, "100100": 0, "010100": 0, "110100": 0, "001100": 0, "39": 0, "101100": 0, "011100": 0, "131": 0, "111100": 0, "28": 0, "mai": [0, 1], "than": 0, "select": [0, 1], "highest": 0, "solution_str": 0, "max": [0, 1], "solution_cut_valu": 0, "61": 0, "color": 0, "color_graph": 0, "index": [0, 1], "bit": [0, 1], "enumer": 0, "elif": [0, 1], "b": [0, 1], "show": 0, "node_color": 0, "01674753771946949": 0, "28545177409616207": 0, "75": 0, "715466761029708": 0, "474791601952659": 0, "78": 0, "3195570920586174": 0, "13284077817626752": 0, "08": 0, "5959727064172196": 0, "11181633399969876": 0, "7": [0, 1], "07": 0, "5873427933094396": 0, "367133063241776": 0, "13624159233195787": 0, "30115616185619576": 0, "03": 0, "11949405461248812": 0, "5866079359523575": 0, "compar": [0, 1, 2], "brute": 0, "forc": 0, "approach": 0, "all_poss": 0, "actual_solut": 0, "min": 0, "actual_solution_cut_valu": 0, "posit": 0, "f": 0, "01604946461088566": 0, "2847479650782671": 0, "7146239765611268": 0, "4636686593078169": 0, "31626451499441": 0, "12780905025779288": 0, "5948398177769747": 0, "11336473757454996": 0, "5855910738223974": 0, "3598274981764227": 0, "13583362339503774": 0, "29228543180409977": 0, "11978415878415191": 0, "5770333968823671": 0, "stack": 0, "against": 0, "term": 0, "correct": 0, "answer": 0, "ratio": 0, "higher": 0, "better": [0, 1], "small": 0, "even": [0, 1], "exact": 0, "musti": 0, "http": [0, 1], "www": 0, "mustythought": 0, "com": 0, "vqa": 0, "jack": 0, "ceroni": 0, "code": [0, 1], "lucaman99": 0, "io": 0, "new_blog": 0, "2020": [0, 2], "mar16": 0, "html": [0, 1], "youtu": 0, "aokm9bkwevu": 0, "e0sos_lr": 0, "ki": 0, "rsln": 0, "ieee_qw_2020": 0, "sai": 1, "alic": 1, "bob": 1, "secur": 1, "commun": 1, "channel": [1, 2], "privat": 1, "worri": 1, "about": 1, "someon": 1, "eavesdrop": 1, "convers": 1, "unfortun": 1, "virtual": 1, "imposs": 1, "some": [1, 2], "tap": 1, "read": 1, "That": 1, "cryptographi": 1, "If": 1, "she": 1, "encrypt": 1, "letter": 1, "alphabet": 1, "rightarrow": 1, "vdot": 1, "26": 1, "know": 1, "he": 1, "decod": 1, "revers": 1, "etc": 1, "eavesdropp": 1, "were": 1, "hack": 1, "still": 1, "idea": 1, "string": 1, "scheme": 1, "pretti": 1, "crack": 1, "could": 1, "guess": 1, "certain": 1, "advanc": 1, "techniqu": [1, 2], "fall": 1, "under": [1, 2], "categori": 1, "symmetr": 1, "parti": 1, "contain": 1, "instruct": 1, "decrypt": 1, "our": 1, "earlier": 1, "exampl": 1, "assum": 1, "long": 1, "share": 1, "secret": 1, "But": 1, "kind": 1, "requir": 1, "creat": 1, "place": [1, 2], "ideal": 1, "meet": 1, "real": 1, "world": 1, "whisper": 1, "ear": 1, "impract": 1, "everytim": 1, "setup": 1, "imagin": 1, "had": 1, "person": [1, 2], "befor": 1, "being": 1, "email": 1, "The": 1, "solv": [1, 2], "dilemma": 1, "perfect": 1, "certainti": 1, "freeli": 1, "els": 1, "repeat": 1, "process": 1, "again": 1, "access": 1, "own": 1, "capabl": 1, "transmit": 1, "fibr": 1, "optic": 1, "cabl": 1, "polar": 1, "photon": 1, "classic": [1, 2], "telephon": 1, "ensur": 1, "nutshel": 1, "her": 1, "base": 1, "chose": 1, "tell": 1, "him": 1, "few": 1, "sent": 1, "analyz": [1, 2], "consid": 1, "happen": 1, "those": 1, "down": 1, "step": 1, "entail": 1, "includ": 1, "who": 1, "understand": 1, "from": [1, 2], "tool": 1, "plot_bloch_multivector": 1, "vector": 1, "possibl": 1, "directli": 1, "upward": 1, "said": 1, "downward": 1, "vertic": 1, "shown": 1, "imag": 1, "left": 1, "right": 1, "li": 1, "500": 1, "flip": 1, "coin": 1, "write": 1, "land": 1, "head": 1, "tail": 1, "prepar": 1, "key_length": 1, "seed": 1, "flipper": 1, "alice_bit": 1, "randbit": 1, "1101111110": 1, "generate_random_bas": 1, "num_of_bas": 1, "function": [1, 2], "bases_str": 1, "randbasi": 1, "alice_bas": 1, "zxxzzzzxzx": 1, "its": [1, 2], "By": 1, "default": 1, "ibm": 1, "turn": 1, "gate": 1, "convert": 1, "vert0": 1, "none": 1, "vert1": 1, "vert": 1, "store": 1, "circuit": 1, "encoded_qubit": 1, "qc": 1, "q_0": 1, "normal": 1, "quantum_channel": 1, "build": 1, "wait": 1, "pick": 1, "locat": 1, "receiv": 1, "hi": 1, "bob_bas": 1, "xzzxzzzxxx": 1, "accomplish": 1, "ad": 1, "depend": 1, "simul": [1, 2], "shot": 1, "measured_bit": 1, "matter": 1, "qubits_receiv": 1, "bob_bit": 1, "0110111110": 1, "beauti": 1, "publicli": 1, "post": 1, "twitter": 1, "classical_channel": 1, "50": 1, "chanc": 1, "wrong": 1, "instanc": 1, "match": 1, "useless": 1, "common": 1, "indic": 1, "common_bas": 1, "19": 1, "22": 1, "discard": 1, "rest": 1, "announc": 1, "hear": 1, "after": 1, "100": 1, "yep": 1, "seem": 1, "uh": 1, "oh": 1, "least": 1, "fairli": 1, "remain": 1, "listen": 1, "track": 1, "These": 1, "Or": 1, "shhhhh": 1, "anyon": 1, "nthe": 1, "010101101001011110110100011011001100000111010101000101011101001000110101100111101001101010000111000111000011001110100100000": 1, "vari": 1, "spy": 1, "tri": 1, "usual": 1, "similar": 1, "qubits_intercept": 1, "eve_bas": 1, "eve_bit": 1, "No": 1, "clone": 1, "theorem": 1, "cannot": 1, "copi": 1, "never": 1, "obviou": 1, "prevent": 1, "realiz": 1, "decoi": 1, "entir": 1, "simplic": 1, "perhap": 1, "public": 1, "As": 1, "nois": 1, "caus": 1, "error": 1, "throw": 1, "awai": 1, "effort": 1, "off": 1, "textbook": 1, "org": 1, "ch": 1, "hello": [], "my": 2, "welcom": 2, "websit": 2, "feel": 2, "free": 2, "linkedin": 2, "youtub": 2, "portfolio": 2, "medium": 2, "engin": 2, "scienc": 2, "univers": 2, "toronto": 2, "pursu": 2, "undergrad": 2, "uoft": 2, "current": 2, "learn": 2, "fundament": 2, "structur": 2, "calculu": 2, "algebra": 2, "matlab": 2, "sky": 2, "solar": 2, "race": 2, "member": 2, "subteam": 2, "team": 2, "latch": 2, "brake": 2, "catia": 2, "cad": 2, "ansi": 2, "workbench": 2, "logist": 2, "optim": 2, "qworld": 2, "research": 2, "rp": 2, "009": 2, "evalu": 2, "qubo": 2, "formul": 2, "vehicl": 2, "rout": 2, "problem": 2, "variant": 2, "focu": 2, "capacit": 2, "window": 2, "cvrptw": 2, "benchmark": 2, "anneal": 2, "qosf": 2, "repo": 2, "explor": 2, "d": 2, "wave": 2, "advantag": 2, "variou": 2, "shantom": 2, "borah": 2, "aniket": 2, "sanjai": 2, "sinha": 2, "vesselin": 2, "gueorguiev": 2, "maxcut": 2, "qaoa": 2, "weight": 2, "ocean": 2, "sdk": 2, "runtim": 2, "qasm": 2, "breakthrough": 2, "junior": 2, "challeng": 2, "compet": 2, "top": 2, "global": 2, "submiss": 2, "video": 2, "lorentz": 2, "transform": 2, "special": 2, "rel": 2, "wrote": 2, "context": 2, "instacart": 2, "consult": 2, "web": 2, "scraper": 2, "custom": 2, "review": 2, "identifi": 2, "complaint": 2, "recommend": 2, "improv": 2, "shop": 2, "experi": 2, "present": 2, "deck": 2, "jupyt": 2}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"solv": 0, "weight": 0, "maxcut": 0, "problem": 0, "from": 0, "scratch": 0, "qaoa": 0, "introduct": [0, 1], "creat": 0, "our": 0, "cost": 0, "function": 0, "map": 0, "hamiltonian": 0, "The": 0, "mixer": 0, "construct": 0, "unitari": 0, "oper": 0, "turn": 0, "gate": 0, "circuit": 0, "demo": 0, "classic": 0, "optim": 0, "refer": 0, "quantum": 1, "kei": 1, "distribut": 1, "bb84": 1, "protocol": 1, "what": [1, 2], "i": [1, 2], "overview": 1, "encod": 1, "send": 1, "qubit": 1, "measur": 1, "comparison": 1, "intercept": 1, "ev": 1, "waiiiiiiit": 1, "second": 1, "sourc": 1, "avneesh": 2, "verma": [], "m": 2, "work": 2, "On": 2, "project": 2, "hi": 2}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"Solving the Weighted Maxcut Problem from Scratch with QAOA": [[0, "solving-the-weighted-maxcut-problem-from-scratch-with-qaoa"]], "Introduction": [[0, "introduction"], [1, "introduction"]], "Creating our Cost function": [[0, "creating-our-cost-function"]], "Mapping our Cost Function to a Hamiltonian": [[0, "mapping-our-cost-function-to-a-hamiltonian"]], "The Mixer Hamiltonian": [[0, "the-mixer-hamiltonian"]], "Constructing Unitary Operators": [[0, "constructing-unitary-operators"]], "Turning our Unitary Operators into Gates": [[0, "turning-our-unitary-operators-into-gates"]], "Unitary Operator Circuit Demo": [[0, "unitary-operator-circuit-demo"]], "Classical Optimization": [[0, "classical-optimization"]], "References": [[0, "references"]], "Quantum Key Distribution (BB84 Protocol)": [[1, "quantum-key-distribution-bb84-protocol"]], "What is BB84?": [[1, "what-is-bb84"]], "Overview": [[1, "overview"]], "Encoding": [[1, "encoding"]], "Sending the qubits": [[1, "sending-the-qubits"]], "Measurement": [[1, "measurement"]], "Comparison": [[1, "comparison"], [1, "id1"]], "Interception": [[1, "interception"]], "\u26a0\ufe0f Interception by Eve \u26a0\ufe0f": [[1, "interception-by-eve"]], "Waiiiiiiit a Second\u2026": [[1, "waiiiiiiit-a-second"]], "Sources": [[1, "sources"]], "Hi, I\u2019m Avneesh!": [[2, "hi-i-m-avneesh"]], "What I\u2019m Working On": [[2, "what-i-m-working-on"]], "Projects": [[2, "projects"]]}, "indexentries": {}})