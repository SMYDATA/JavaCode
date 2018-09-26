package com.smydata.businessplan.controller.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
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
import com.smydata.businessplan.controller.DiscountsController;
import com.smydata.businessplan.service.DiscountsService;
import com.smydata.registration.model.Discounts;
import com.smydata.registration.model.Registration;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
public class DiscountsControllerTest {

	@Mock
	private DiscountsService discountsServiceMock;
	
	@InjectMocks
	private DiscountsController discountsController;
	
	private static MockHttpServletRequest request;
	
	@BeforeClass
	public static void initObjects() {
		 request = new MockHttpServletRequest();
		HttpSession session = request.getSession(true);
		Registration registration = new Registration();
		registration.setMobile("8978446892");
		session.setAttribute("registration", registration);
	}
	
	@AfterClass
	public static void clear() {
		HttpSession session = request.getSession();
		session.removeAttribute("registration");
	}
	
	@Ignore
	@Test
	public void testSuccessSaveDiscounts(){
		
		List<Discounts> discounts = getDiscountsMetadata();
		doNothing().when(discountsServiceMock).deleteDiscounts("8978446892");
		when(discountsServiceMock.saveDiscounts((List<Discounts>) Mockito.anyCollectionOf(Discounts.class))).thenReturn(discounts);
		ResponseEntity<?> result = discountsController.saveDiscounts(discounts, request);
		
		assertEquals(HttpStatus.OK, result.getStatusCode());
		assertNotNull(result.getBody());
		
		verify(discountsServiceMock).deleteDiscounts("8978446892");
		verify(discountsServiceMock).saveDiscounts(discounts);
		verify(discountsServiceMock, times(1)).saveDiscounts(discounts);
	}
	
	@Ignore
	@Test
	public void testFailureSaveDiscounts(){
		
		List<Discounts> discounts = null;
		doNothing().when(discountsServiceMock).deleteDiscounts("8978446892");
		ResponseEntity<?> result = discountsController.saveDiscounts(discounts, request);
		
		assertEquals(HttpStatus.NOT_FOUND, result.getStatusCode());
		
		verify(discountsServiceMock, times(1)).deleteDiscounts("8978446892");
	}
	
	@Ignore
	@Test
	public void testSuccessGetDiscounts(){
		
		List<Discounts> discounts = getDiscountsMetadata();
		String mobile = "8978446892";
		long businessId = 113;
		when(discountsServiceMock.getDiscountDetails(mobile, businessId)).thenReturn(discounts);
		ResponseEntity<?> result = discountsController.getDiscounts(request);
		
		assertEquals(HttpStatus.OK, result.getStatusCode());
		assertNotNull(result.getBody());
		verify(discountsServiceMock).getDiscountDetails(mobile, businessId);
		verify(discountsServiceMock, times(1)).getDiscountDetails(mobile, businessId);
	}
	
	@Ignore
	@Test
	public void testGetDiscountsNoData(){
		
		List<Discounts> discounts = null;
		String mobile = "8978446892";
		long businessId = 113;
		when(discountsServiceMock.getDiscountDetails(mobile, businessId)).thenReturn(discounts);
		ResponseEntity<?> result = discountsController.getDiscounts(request);
		
		assertEquals(HttpStatus.NOT_FOUND, result.getStatusCode());
		verify(discountsServiceMock).getDiscountDetails(mobile, businessId);
		verify(discountsServiceMock, times(1)).getDiscountDetails(mobile, businessId);
	}
	
	private List<Discounts> getDiscountsMetadata() {
		List<Discounts> discounts = new ArrayList<>();
		Calendar currenttime = Calendar.getInstance();
		Discounts discount = new Discounts();
		discount.setDiscount(5);
		discount.setEnable(true);
		discount.setEndDate(new Date((currenttime.getTime()).getTime()));
		discount.setMaxAmount(1000);
		discount.setMinAmount(500);
		discount.setMobile("8978446892");
		discount.setStartDate(new Date((currenttime.getTime()).getTime()));
		discounts.add(discount);
		return discounts;
	}
}
