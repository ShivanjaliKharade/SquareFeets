package com.squarefeets.services;

import java.util.List;
import java.util.Optional;

import com.squarefeets.model.Address;
import com.squarefeets.model.Property_Type;
import com.squarefeets.model.User;
import com.squarefeets.payload.AddPropertyForBuilder;
import com.squarefeets.repository.PropertyTypeRepository;
import com.squarefeets.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.squarefeets.model.Property;
import com.squarefeets.repository.PropertyRepository;

@Component
@Service
public class PropertyService {
	
	@Autowired
	private PropertyRepository propertyRepository;

	@Autowired
	private PropertyTypeRepository propertyTypeRepository;

	@Autowired
	private UserRepository userRepository;
	

	//add property
	public Property addProperty(Property prop) {
			
			Property result = (Property) propertyRepository.save(prop);
			return result;
		}

	//get all Property
		public List<Property> getAllProperties() {
			// TODO Auto-generated method stub
			List<Property> propertylist = (List<Property>)this.propertyRepository.findAll();
			return propertylist;
		}

		//get Property by Id
		public Property getPropertyById(int propertyId) {
			// TODO Auto-generated method stub
			Property property = null;
			try {
				property = this.propertyRepository.findById(propertyId);
			}catch (Exception e) {
				e.printStackTrace();
			}
			return property;
		}
		
		public Property_Type findPropertyTypeById(Integer id){
			Optional<Property_Type> optionalPropertyType= propertyTypeRepository.findById(id);
			return optionalPropertyType.get();
		}

		public Property getPropertyFromPayload(AddPropertyForBuilder addPropertyForBuilder){
			Property property = new Property();
			Address address = new Address();
			Property_Type propertyType = new Property_Type();

			property.setPropertyName(addPropertyForBuilder.getPropertyName());
			property.setDetails(addPropertyForBuilder.getDetails());
			property.setPrice(addPropertyForBuilder.getPrice());
			property.setConstructionStatus(addPropertyForBuilder.getConstructionStatus());
			property.setReraReg(addPropertyForBuilder.getReraReg());
			property.setArea(addPropertyForBuilder.getArea());
			property.setRooms(addPropertyForBuilder.getRooms());

			address.setPlotNo(Integer.parseInt(addPropertyForBuilder.getPlotNo()));
			address.setStreet(addPropertyForBuilder.getStreet());
			address.setLandmark(addPropertyForBuilder.getLandmark());
			address.setCity(addPropertyForBuilder.getCity());
			address.setState(addPropertyForBuilder.getState());

			propertyType = findPropertyTypeById(Integer.parseInt(addPropertyForBuilder.getPropertyTypeId()));
			property.setAddress(address);
			property.setPropertyType(propertyType);
			User user = userRepository.findByEmail(addPropertyForBuilder.getUseremail()).get();
			property.setUser(user);
			propertyRepository.save(property);

			return property;
		}
	
}
