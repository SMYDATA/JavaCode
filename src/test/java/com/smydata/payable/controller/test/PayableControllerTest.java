package com.smydata.payable.controller.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

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

import com.smydata.payable.controller.PayableController;
import com.smydata.payable.service.PayableService;
import com.smydata.registration.model.Payable;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
public class PayableControllerTest {
	
	@Mock
	PayableService payableServiceMock;
	@InjectMocks
	PayableController payableController;
	
	/*@SuppressWarnings("deprecation")
	@Test
	public void testSuccessSavePayables(){
		List<Payable> payables = getPayableMetada();
//		doNothing().when(payableServiceMock).saveOwnerPayables(payables);
		when(payableServiceMock.saveOwnerPayables(Matchers.anyList())).thenReturn(payables);
//		Mockito.doNothing().when(payableServiceMock).deletePaidInvoice(payables);
		ResponseEntity<?> response = payableController.savePayables(payables, "payable", "false");
//		when(payableServiceMock.getOwnerPayables("9440717764", "PAYBL")).thenReturn(payables);
		assertEquals(HttpStatus.OK,response.getStatusCode());
		assertNotNull(response.getBody());
		verify(payableServiceMock).saveOwnerPayables(payables);
		verify(payableServiceMock, times(1)).saveOwnerPayables(payables);
		verify(payableServiceMock).getOwnerPayables("9440717764", "PAYBL");
	}
	*/
	@Ignore
	@Test
	public void test404SavePayables(){
		List<Payable> payables = getPayableMetada();
//		when(payableServiceMock.saveOwnerPayables(Mockito.anyList())).thenReturn(payables);
//		Mockito.doNothing().when(payableServiceMock).deletePaidInvoice(payables);
//		Mockito.when(payableServiceMock.getOwnerPayables("9440717763", "PAYBL")).thenReturn(payables);
		ResponseEntity<?> response = payableController.savePayables(payables, "payable", "false");
//		Mockito.when(payableServiceMock.getOwnerPayables("9440717763", "PAYBL")).thenReturn(payables);
		assertEquals(HttpStatus.NOT_FOUND,response.getStatusCode());
//		assertNotNull(response.getBody());
		verify(payableServiceMock).saveOwnerPayables(payables);;
		verify(payableServiceMock, times(1)).saveOwnerPayables(payables);
		verify(payableServiceMock).getOwnerPayables("9440717764", "PAYBL");
	}
	
	private List<Payable> getPayableMetada() {
		List<Payable> payables = new ArrayList<>();
		Calendar currenttime = Calendar.getInstance();

		Payable payable = new Payable();
		payable.setAmount(200);
		payable.setCode("PAYBL");
		payable.setCreateDate(new Date((currenttime.getTime()).getTime()));
		payable.setDesc("inv1");
		payable.setInvoiceNumber(22);
		payable.setMobile("9440717764");
		payable.setReceived(0);
		payables.add(payable);
		return payables;
	}

}
