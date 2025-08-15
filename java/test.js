// Ждем полной загрузки документа
document.addEventListener("DOMContentLoaded", function() {
    const hoverElement = document.getElementById("hoverElement"); // Элемент для наведения
    const tooltip = document.getElementById("tooltip"); // Текст подсказки

    // Обработчик события наведения мыши
    hoverElement.addEventListener("mouseover", function(event) {
        tooltip.style.display = "block"; // Показываем текст подсказки
        tooltip.style.left = event.pageX + "px"; // Устанавливаем позицию по X
        tooltip.style.top = event.pageY + "px"; // Устанавливаем позицию по Y
    });

    // Обработчик события ухода мыши
    hoverElement.addEventListener("mouseout", function() {
        tooltip.style.display = "none"; // Скрываем текст подсказки
    });
});