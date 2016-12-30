(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.commerce_add_to_cart_confirmation_overlay = {
    attach:function (context, settings) {
      var popup_content = $('.messages--commerce-add-to-cart-confirmation');
      if (popup_content.length > 0) {
        var popup_title = popup_content.find('.added-product-title').html();
        popup_content.find('.added-product-title').remove();
        $('.messages--commerce-add-to-cart-confirmation').remove();

        var confirmationModal = Drupal.dialog(popup_content, {
          title: popup_title,
          dialogClass: 'commerce-add-to-cart-confirmation',
          width: 575,
          height: 230,
          maxWidth: '95%',
          autoResize: true,
          resizable: false,

          close: function (event) {
            // Удаляем элемент который использовался для содержимого.
            $(event.target).remove();
          },
          buttons: [
            {
              text: Drupal.t('Go to checkout'),
              class: 'button button--primary',
              click: function () {
                widow.location.href = '/cart';
                confirmationModal.close();
              }
            },
            {
              text: Drupal.t('Continue shopping'),
              class: 'button',
              click: function () {
                confirmationModal.close();
              }
            }
          ]
        });
        // Отображает модальное окно с overlay.
        confirmationModal.showModal();
      }
    }
  }
})(jQuery, Drupal, drupalSettings);
