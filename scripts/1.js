document.addEventListener('DOMContentLoaded', function () {
	var nameInput = document.getElementById('name')
	var phoneInput = document.getElementById('phone')
	var orderButton = document.getElementById('order_action')

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
