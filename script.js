// Variables del personaje (
const name = "Zara Darkbane"; 
const characterClass = "Hechicera"; 
let level = 7; 
let health = 80; 
let mana = 120; 
const attack = 45; 
const defense = 30; 

// Variables auxiliares 
const enemyDefense = 20; 
const spellCost = 50; 
const isStunned = false; 

// 1. Función Declarada: Calcular daño 
function calculateDamage(attack, defense) {
    const damage = attack - defense; 
    return damage > 0 ? damage : 0; 
}

// 2. Arrow Function: ¿Está vivo? 
const isAlive = (health) => health > 0; // Solo true si es estrictamente mayor a 0 

// 3. Arrow Function: ¿Puede lanzar hechizo? 
const canCastSpell = (currentMana, spellCost, isStunned) => {
    return currentMana >= spellCost && !isStunned; // Mana suficiente y NO aturdido 
};

// 4. Función Declarada: Presentación (usando Template Literals) 
function getPresentation(name, characterClass, level) {
    return `${name} — ${characterClass} (Nivel ${level})`; 
}

// Mostrar resultados en consola 
console.log("Presentación:", getPresentation(name, characterClass, level)); 
console.log("¿Está viva?:", isAlive(health)); 
console.log("Daño causado al enemigo:", calculateDamage(attack, enemyDefense)); 
console.log("¿Puede lanzar Rayo Carmesí?:", canCastSpell(mana, spellCost, isStunned)); 