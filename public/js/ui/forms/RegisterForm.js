/**
 * Класс RegisterForm управляет формой
 * регистрации
 * Наследуется от AsyncForm
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(options) {
    
    User.register(options.data, (err, response) => {
      
      if (err) {
        alert(JSON.stringify(err));
        return;
      }
   
      if (!response.success) {
        alert(JSON.stringify(response));
        return;
      } 
      
      for (const input of this.element.querySelectorAll('input'))
        input.value = '';
      
      App.setState('user-logged');
      App.getModal('register').close();
    });
    
  }
}
