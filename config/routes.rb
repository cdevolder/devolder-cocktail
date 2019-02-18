Rails.application.routes.draw do

  devise_for :users
  root to: 'cocktails#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :likes, only: [:index, :create]
      resources :cocktails, only: [:index, :show, :update] do
        resources :reviews, only: [:index, :create, :destroy]
      end
    end
  end
end
