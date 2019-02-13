Rails.application.routes.draw do

  devise_for :users
  root to: 'pages#home'


  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :likes, only: [:index, :create]
      resources :cocktails, only: [:index, :show, :create] do
        resources :reviews, only: [:index, :create, :destroy]
      end
    end
  end
end
