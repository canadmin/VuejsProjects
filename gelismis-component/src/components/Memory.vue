  <template>
  <div>
      <div class="memory">
      <slot name="heading"></slot>
      </div>
      <div class="memory">
      <slot></slot>
      </div>

      <div class="memory">
          <slot name="author">
              <h3>Kullanıcı</h3>
              <p>Henüz herhangi bir veri gelmemiş</p>
          </slot>
      </div>
  </div>
  </template>

  <script>
  export default {
      props : ["content"]
  }
  //herhangi bir veri gelmemiş ise default slot tanımı yukarıdaki author gibi olmalıdır
  //slot templatein kullanıldığı yerde template içerisine girilen contentdi almak için kullaılıyor
  //slotları ayrıştırmak için name slots kullanılıyor
  </script>

  <style  scoped>
  div.memory{
     border: 1px solid #ccc;
     box-shadow: 1px 1px 2px #666;
     padding: 10px 20px;
     margin-top:  20px;

  }
  </style>
