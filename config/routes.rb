Artographer::Application.routes.draw do
 resources :site, :events, :users, :sessions
 

get '/signup' => 'users#new'
delete '/signout', to: 'sessions#destroy'
get'/signin' => 'sessions#new'
 root to: "site#index"
end
