package com.smydata.registration.controller.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletRequest;

import com.smydata.registration.controller.RegistrationController;
import com.smydata.registration.model.BusinessDetail;
import com.smydata.registration.model.Registration;
import com.smydata.registration.service.RegistrationService;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
public class RegistrationControllerTest {

	@Mock
	private RegistrationService registrationServiceMock;
	
	@InjectMocks
	private RegistrationController registrationController;
	
	private static MockHttpServletRequest request;
	
	@BeforeClass
	public static void initObjects() {
		 request = new MockHttpServletRequest();
		HttpSession session = request.getSession(true);
		Registration registration = new Registration();
		registration.setMobile("8978446892");
		registration.setPassword("123");
		session.setAttribute("registration", registration);
	}
	
	@AfterClass
	public static void clear() {
		HttpSession session = request.getSession();
		session.removeAttribute("registration");
	}
	
	@Ignore
	@Test
	public void testLoginUser() {
		Registration registration = getRegistrationMetadata();
		String mobile = "8978446892";
		when(registrationServiceMock.findByMobileNumber(mobile)).thenReturn(registration);
		ResponseEntity<?> result = registrationController.loginUser(registration,"business", request);
		
		assertEquals(HttpStatus.OK, result.getStatusCode());
		assertEquals(true,Boolean.valueOf(result.getBody().toString()));
		verify(registrationServiceMock).findByMobileNumber(mobile);
		verify(registrationServiceMock, times(1)).findByMobileNumber(mobile);
		
	}
	
	@Ignore
	@Test
	public void testLoginUserFailure() {
		Registration registration = getRegistrationMetadata();
		Registration reg = getRegMetadata();
		String mobile = "8978446892";
		
		when(registrationServiceMock.findByMobileNumber(mobile)).thenReturn(reg);
		ResponseEntity<?> result = registrationController.loginUser(registration,"business", request);
		
		assertEquals(HttpStatus.NOT_FOUND, result.getStatusCode());
		verify(registrationServiceMock).findByMobileNumber(mobile);
		verify(registrationServiceMock, times(1)).findByMobileNumber(mobile);
		
	}
	
	@Ignore
	@Test
	public void testSaveUser() {
		Registration registration = getRegistrationMetadata();
		Registration reg = getRegMetadata();
		List<Registration> regList = new ArrayList<>();
		regList.add(reg);
		when(registrationServiceMock.saveUser(Mockito.any(Registration.class))).thenReturn(registration);
		when(registrationServiceMock.getAllRegisteredDetails()).thenReturn(regList);
		ResponseEntity<?> result = registrationController.saveUser("Registration", registration, request);
		
		assertEquals(HttpStatus.OK, result.getStatusCode());
		assertNotNull(result.getBody());
		verify(registrationServiceMock).saveUser(registration);
		verify(registrationServiceMock, times(1)).saveUser(registration);
		verify(registrationServiceMock).getAllRegisteredDetails();
		verify(registrationServiceMock, times(1)).getAllRegisteredDetails();
		
	}
	
	@Ignore
	@Test
	public void testSaveUserFailure() {
		Registration registration = null;
		
		ResponseEntity<?> result = registrationController.saveUser("Registration", registration, request);
		@SuppressWarnings("unchecked")
		List<String> messages = (List<String>) result.getBody();
		assertEquals(HttpStatus.NOT_FOUND, result.getStatusCode());
		assertEquals("BO entered details are empty",messages.get(0));
	}
	
	private Registration getRegMetadata() {
		Registration reg = new Registration();
		reg.setPassword("1234");
		reg.setMobile("7722443311");
		return reg;
	}
	
	private Registration getRegistrationMetadata() {
		Registration registration = new Registration();
		List<BusinessDetail> businessDetails = new ArrayList<>();
		registration.setMobile("8978446892");
		registration.setPassword("123");
		registration.setEmail("test@gmail.com");
		registration.setOwnerName("SMD");
		registration.setRegistrationId(new Long(1234));
		BusinessDetail businessDetail = new BusinessDetail();
		businessDetail.setBusinessAddress("Chicago");
		businessDetail.setBusinessDetailId(123);
		businessDetail.setCategory("1");
		businessDetail.setCity("Chicago");
		businessDetail.setCompanyName("SMDC");
		businessDetail.setCountry("US");
		businessDetail.setPinCode("50123");
		businessDetail.setState("Illinois");
		businessDetails.add(businessDetail);
		registration.setBusinessDetails(businessDetails);
		return registration;
	}
}
