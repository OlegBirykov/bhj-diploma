/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * Наследуется от AsyncForm
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно (в котором находится форма) в случае успеха,
   * а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(options) {
    
    Account.create(options.data, (err, response) => {
      
      if (err) {
        alert(JSON.stringify(err));
        return;
      }
   
      if (!response.success) {
        alert(JSON.stringify(response));
        return;
      } 
      
      App.getModal('createAccount').close();  
      App.update(); 
      
      for (const input of this.element.querySelectorAll('input'))
        input.value = '';
      
    });
    
  }
}
