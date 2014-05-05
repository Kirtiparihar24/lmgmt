require 'test_helper'

class ContactAdditionalFieldTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end

# == Schema Information
#
# Table name: contact_additional_fields
#
#  id                       :integer         not null, primary key
#  business_street          :string(64)
#  business_city            :string(64)
#  business_state           :string(64)
#  business_country         :string(64)
#  business_postal_code     :string(64)
#  business_fax             :string(32)
#  business_phone           :string(32)
#  businessphone2           :string(32)
#  assistants_name          :string(64)
#  assistants_phone         :string(32)
#  professional_expertise   :string(64)
#  partners_name            :string(64)
#  partners_birthday        :datetime
#  undergraduate_schools    :string(64)
#  graduate_school          :string(64)
#  year_graduated           :integer
#  graduate_degree          :string(64)
#  supervisors_title        :string(64)
#  supervisors_email        :string(64)
#  supervisors_phone_number :string(32)
#  religion                 :string(64)
#  birthday                 :datetime
#  birth_country            :string(64)
#  children                 :string(64)
#  gender                   :string(32)
#  hobby                    :string(64)
#  first_contact            :datetime
#  date_of_first_deal       :datetime
#  current_service_provider :string(64)
#  next_call_back_date      :datetime
#  referred_by              :string(64)
#  spouse_name              :string(64)
#  spouse_birthday          :datetime
#  linked_in_account        :string(64)
#  twitter_account          :string(64)
#  facebook_account         :string(64)
#  association_1            :string(64)
#  association_2            :string(64)
#  contact_id               :integer
#  company_id               :integer         not null
#  permanent_deleted_at     :datetime
#  created_by_user_id       :integer
#  updated_by_user_id       :integer
#  deleted_at               :datetime
#  created_at               :datetime
#  updated_at               :datetime
#  skype_account            :string(64)
#  business_phone1_type     :integer
#  business_phone2_type     :integer
#  others_1                 :string(255)
#  others_2                 :string(255)
#  others_3                 :string(255)
#  others_4                 :string(255)
#  others_5                 :string(255)
#  others_6                 :string(255)
#

