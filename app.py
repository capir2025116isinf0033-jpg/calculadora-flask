from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def inicio():
    return render_template("index.html")

@app.route("/calculadora")
def calculadora():
    return render_template("calculadora.html")

@app.route("/resultado")
def resultado():
    numero1 = float(request.args.get("numero1"))
    numero2 = float(request.args.get("numero2"))
    operacao = request.args.get("operacao")

    if operacao == "somar":
        resultado = numero1 + numero2
    elif operacao == "subtrair":
        resultado = numero1 - numero2
    elif operacao == "multiplicar":
        resultado = numero1 * numero2
    elif operacao == "dividir":
        if numero2 == 0:
            resultado = "Não é possível dividir por zero"
        else:
            resultado = numero1 / numero2

    return render_template("resultado.html", resultado=resultado)

if __name__ == "__main__":
    app.run(debug=True)