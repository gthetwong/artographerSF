class AddClosingToEvents < ActiveRecord::Migration
  def change
    add_column :events, :closing, :datetime
  end
end
