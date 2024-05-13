document.addEventListener('DOMContentLoaded', function () {
	var nameInput = document.getElementById('name')
	var phoneInput = document.getElementById('phone')
	var orderButton = document.getElementById('order_action')

	// Изначально делаем кнопку неактивной
	orderButton.disabled = true

	// Функция для проверки полей ввода
	function checkInput() {
		// Проверяем, что в поле телефона введены только цифры
		var phoneIsValid = /^\d+$/.test(phoneInput.value)

		if (nameInput.value && phoneIsValid) {
			// Если оба поля заполнены и телефон валиден, делаем кнопку активной и меняем текст
			orderButton.disabled = false
			orderButton.textContent = 'Отправить'
		} else {
			// Если хотя бы одно поле не заполнено или телефон не валиден, делаем кнопку неактивной
			orderButton.disabled = true
		}
	}

	// Проверяем поля ввода при каждом изменении
	nameInput.addEventListener('input', checkInput)
	phoneInput.addEventListener('input', checkInput)

	// ... ваш JavaScript-код ...

	// Отправка сообщения в Telegram при нажатии на кнопку
	orderButton.addEventListener('click', function (event) {
		event.preventDefault()

		var name = nameInput.value
		var phone = phoneInput.value

		fetch(
			'https://api.telegram.org/bot7029577579:AAHpXCvjje-vwDDREH-cRlVPqSraFEL1uTU/sendMessage',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chat_id: '6951152445',
					text: 'Имя: ' + name + ', номер телефона: ' + phone,
				}),
			}
		)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				// Показать всплывающее окно с сообщением об успешной отправке

				// Изменить текст кнопки
				orderButton.textContent = 'Форма отправлена'
				// Сделать кнопку неактивной
				orderButton.disabled = true
			})
			.catch(error => console.error('Error:', error))
	})
})
