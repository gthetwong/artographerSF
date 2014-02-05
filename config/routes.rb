Artographer::Application.routes.draw do
    resources :site, :events, :users, :sessions

    root to: "site#index"

    get '/signup' => 'users#new'
    delete '/signout' => 'sessions#destroy'
    get '/signin' => 'sessions#new'
    get '/events/all' => 'events#all'
    
end
